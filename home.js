define(function(require) {
	var $ = require("jquery"),  WindowContainer = require("$UI/system/components/justep/windowContainer/windowContainer");
	justep = require("$UI/system/lib/justep"), require("$UI/system/lib/cordova/cordova");
	require('$UI/system/lib/jquery/transition');
	var baas = require("$UI/MFyouli/baas");

	// 为了compose后postMessage到这里终止
	window.isPortalWindow = true;

	// 主页面配置
	var mainPage = {
		url : './mainActivity.w',
		process : "/portal/process/message/messageProcess",
		activity : "mainActivity"
	}, mainPageId = 'main';

	var Model = function() {
		this.init();
		this.callParent();
		this._latitude;
		this._longitude;
		this._city;
	};

	Model.prototype = {
		// 返回一个.w url
		getURL : function(url, args) {
			if (!url)
				return;
			if (typeof url !== 'string') {
				args = url;// TODO clone;
				url = args.url;
				delete args.url;
			}
			args = args || {};
			if (url && url.indexOf("http") !== 0) {
				var params = [];
				for ( var key in args) {
					if (args.hasOwnProperty(key))
						params.push(key + '=' + (args[key] || ''));
				}
				params = params.join('&');
				url = url + (url.indexOf('?') == -1 ? '?' : '&') + params;
				url = require.toUrl(url);
			}
			return url;
		},
		init : function() {
			// 初始化接受postMessage消息
			var me = this;
			$(window).on('message', function(message) {
				var data = message.originalEvent.data;
				try {/* 这里是为了兼容IE9 */
					data = JSON.parse(data);
				} catch (e) {
				}
				if (data.type == "portal" && data.event) {
					var name = data.event.name;
					if (typeof me[name] == 'function')
						me[name].apply(me, data.event.args);
				}
			});
		},
		openPage : function(path, options, fn) {
			if (typeof options == 'function') {
				fn = options;
				options = {};
			}
			if (typeof path == 'object') {
				path = path.url;
			}
			var me = this;
			options = options || {};
			var pages = this.comp('pages'), url = this.getURL(path, options), pid = path;
			if (!pages.has(pid)) {
				this.loadPage(pid, url, function(err) {
					if (err) {
						setTimeout(function() {
							// hcr 特殊点, 必须知道错误对话框的btn
							$("#__justepErrorDialog__").find(".x-error-close").one("click", function() {
								setTimeout(function() {
									// 以下逻辑应该和closePage类似,
									// maduo支持closePage传pid后, 直接调用即可
									var index = me.openeds.indexOf(pid);
									if (index !== -1) {
										me.openeds.splice(index, 1);
									}
									if (pages.getContent(pid))
										pages.getContent(pid).dispose();
								});
							});
						});
					}

				});

				function after() {
					pages.to(pid);
					me.openeds.push(pid);
					me.current = justep.Util.clone(options);
					me.current.path = path;
				}
				setTimeout(after, 200);
			} else {
				fn && fn();
			}
		},
		loadPage : function(xid, url, fn) {

			var pages = this.comp('pages');
			var content = pages.getContent(xid);
			if (!content) {
				content = pages.add({
					xid : xid
				});
			}
           var parentNode = content.$domNode.get(0);
			var compose = new WindowContainer({
				parentNode : parentNode,
				src : url,
				onLoad : function() {
					fn && fn();
					content.on("onActive", function() {
						if (compose.getInnerModel()) {
							compose.getInnerModel().fireEvent('onActive');
						}
					});
				},
				onLoadError : function(err) {
					fn && fn(err);
				}
			});
			content.innerContainer = compose;
		},
		closePage : function() {
			var pages = this.comp('pages');
			if (this.openeds[this.openeds.length - 1] !== mainPageId) {
				var pid = this.openeds.pop();
				var to = this.openeds[this.openeds.length - 1];
				if (to != mainPageId)
					pages.remove(pid, to);
				else
					pages.remove(pid);
			}
		},
	};

	Model.prototype.modelLoad = function(event) {
		var self = this;
		this.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
		if (self.wxApi) {
			self.wxApi.exec().done(function(wx) {
				wx.getLocation({
					type : 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					success : function(res) {
						self._latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						self._longitude = res.longitude; // 经度，浮点数，范围为180 ~
						window._location = function() {
							var geoc = new BMap.Geocoder();
							var pt = new BMap.Point(self._longitude, self._latitude);
							geoc.getLocation(pt, function(rs) {
								var addComp = rs.addressComponents;
								self._city = addComp.city;
								self.comp("infoData").newData({
									defaultValues : [ {
										"id" : justep.UUID.createUUID(),
										"longitude" : self._longitude,
										"latitude" : self._latitude,
										"city" : self._city
									} ]
								})
								var data = self.comp("jingquData");
								var params = {
									"city" : self._city,
								};
								baas.sendRequest({
									"url" : "/ylapp",
									"action" : "queryJingqu",
									"async" : false,
									"params" : params,
									"success" : function(resultData) {
										var append = event.options && event.options.append;
										data.loadData(resultData, append);
										self._CityId = data.getFirstRow().val("fCityId");
									}
								});
								if (self._latitude != null && self._longitude != null && self._city != null) {
									$("#aa").css("display", "none");
									var pages = self.comp('pages'), portal = self.comp('portal');
									// 加载主页面
									self.loadPage(mainPageId, self.getURL(mainPage));
									// open stack
									self.openeds = [ mainPageId ];
									// 初始当前页
									var current = getParameter('current');
									if (current) {
										var path = current.path;
										delete current.path;
										self.openPage(path, current);
									}
								}
							});
						}
						require([ 'http://api.map.baidu.com/api?v=2.0&ak=q3aGfICnLzgY5i4FtjNAnO6O&callback=_location' ], function() {
							if (window.BMap && window.BMap.Map) {
								window._location();
							}
						});
					}
				});
			})
		}

	};

	return Model;

	function getParameter(name) {
		var search = window.location.search;
		var params = {};
		search = search ? search : "";
		var hash = window.location.hash;
		if (hash && (hash.indexOf("=") != -1)) {
			search += "&" + hash.substring(1);
		}

		if (search.charAt(0) == "?") {
			search = search.substring(1);
		}

		var items = search.split("&");
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			var index = item.indexOf("=");
			if (item && (index != -1)) {
				var key = item.substring(0, index), value = decodeURIComponent(item.substring(index + 1));
				if (key.indexOf('.') == '-1')
					params[key] = value;
				else {
					key = key.split('.');
					var obj = params[key[0]] = params[key[0]] || {};
					for (var j = 1; j < key.length - 1; j++) {
						obj = obj[key[j]] || {};
					}
					obj[key.pop()] = value;
				}
			}
		}
		return params[name];
	}
});