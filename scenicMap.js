define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!org.apache.cordova.device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("css!$UI/MFyouli/plugin/sweetalert").load();
	require("$UI/MFyouli/plugin/sweetalert.min");
	require("$UI/MFyouli/plugin/touchwipe");
	var map;
	var sh;
	var mk;
	var jingdian;
	var Model = function() {
		this.callParent();
		this._id;
		this._map;
		this._coordinate;
		this._latitude;
		this._longitude;
	};
	Model.prototype.touchwipe = function() {
		$(".Info").touchwipe({
			min_move_x : 40, // 横向灵敏度
			min_move_y : 40, // 纵向灵敏度
			wipeLeft : function() {
				$(".imgInfo").animate({
					"width" : 0,
					"display" : "none"
				}, 500);
				setTimeout(function() {
					$(".fowordInfo").css("display", "block");
					$(".rightInfo img").attr("src", "../MFyouli/images/right.png");
				}, 500);
			}, // 左侧滑动事件
			wipeRight : function() {
				$(".imgInfo").animate({
					"width" : "50%",
					"display" : "block"
				}, 600);
				$(".fowordInfo").css("display", "none");
				setTimeout(function() {
					$(".rightInfo img").attr("src", "../MFyouli/images/left.png");
				}, 600);
			}, // 右侧滑动事件
			preventDefaultEvents : true
		// 阻止默认事件
		});
	}

	Model.prototype.loadSHMap = function(maps, coordinate) {
		window._mapInit = function() {
			var tileLayer = new BMap.TileLayer();
			tileLayer.getTilesUrl = function(tileCoord, zoom) {
				var x = tileCoord.x;
				var y = tileCoord.y;
				var url = baas.RESC_URL + maps + '/' + zoom + '/tile' + x + '_' + y + '.png'; // 根据当前坐标，选取合适的瓦片图
				return url;
			}
			var MyMap = new BMap.MapType('MyMap', tileLayer, {
				minZoom : 16,
				maxZoom : 18
			});
			map = new BMap.Map('container', {
				mapType : MyMap
			});

			map.centerAndZoom(new BMap.Point(coordinate.split(',')[0], coordinate.split(',')[1]), 16);
			map.enableScrollWheelZoom(true); // 启用滚轮放大缩小

			$('.BMap_cpyCtrl').css('display', 'none');
			$('.anchorBL').css('display', 'none');

			var myIcon = new BMap.Icon("../MFyouli/images/jingdian.png", new BMap.Size(20, 28));
			// 初始化景点
			// alert(jingdian.toJson(true).toString());
			// alert(jingdian.toJson().rows.length);

			jingdian.each(function(data) {

				var marker = new BMap.Marker(new BMap.Point(data.row.val("fCoordinate").split(",")[0], data.row.val("fCoordinate").split(",")[1]), {
					// 指定Marker的icon属性为Symbol
					icon : new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
						scale : 1,// 图标缩放大小
						fillColor : "#027dcb",// 填充颜色
						strokeWeight : 1,
						strokeColor : "#027dcb",
						fillOpacity : 1
					// 填充透明度
					})
				}); // 创建marker对象
				// marker.enableDragging(); //marker可拖拽

				marker.addEventListener("click", function() {
					$(".titleInfo-name").html(data.row.val("fName"));
					$(".imgInfo").attr("src", baas.RESC_URL + data.row.val("fImage"));

					$(".fowordInfo").html(data.row.val("fIntroduce"));
					var audio = document.getElementById("audioplayer");
					audio.volume = 1;
					audio.src = baas.RESC_URL + data.row.val("fSound");

					$("#yuyin").html("语音解说");
					$("#yuyinicon").attr("src", "../MFyouli/images/yuyin2.png")
					$(".panelInfo").animate({
						height : "225px",
						bottom : "0px"
					}, 1000, function() {

					});
				});
				var label = new BMap.Label(
						"<span style='width:100px;fotn-size:13px; height:17px;padding:3px; border:1px solid #41b5e8;border-radius:3px; background-color:#f0f0f0; color:black;text-decoration:none'>"
								+ data.row.val("fName") + "</span>", {
							offset : new BMap.Size(-15, -17)
						});

				label.setStyle({ // 给label设置样式，任意的CSS都是可以的
					color : "black", // 颜色
					width : "200px",
					height : "18px",
					fontSize : "13px", // 字号
					border : "0", // 边
					textAlign : "center", // 文字水平居中显示
					background : "transparent"
				});

				marker.setLabel(label);
				map.addOverlay(marker); // 在地图中添加marker

			})

			$(".anchorBL").css("display", "none");

			setTimeout(function() {
				$(".BMap_cpyCtrl").css("display", "none");
				$(".anchorBL").css("display", "none");
			}, 1000);
		}
		require([ 'http://api.map.baidu.com/api?v=2.0&ak=q3aGfICnLzgY5i4FtjNAnO6O&callback=_mapInit' ], function() {
			if (window.BMap && window.BMap.Map) {
				window._mapInit();
			}
		});

	};
	Model.prototype.modelLoad = function(event) {
		jingdian = this.comp("jingdianData");
		var self = this;
		if (self._id != "undefind") {
			self.loadSHMap(self._map, self._coordinate);
			self.touchwipe();
			if (localStorage.getItem("yldt") == "1") {
				$("#navigators").attr("flag", "1");
				$("#navigators").attr("src", "../MFyouli/images/dingweiOpen.png");
				self.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
				self.wxApi.exec().done(function(wx) {
					wx.getLocation({
						type : 'gcj02',
						success : function(res) {
							self._latitude = res.latitude;
							self._longitude = res.longitude;

						}
					});
				})
				window._location = function() {

					if (self._longitude > 126.526357 && self._longitude < 126.540191 && self._latitude < 43.854473 && self._latitude > 43.843317) {
						var point = new BMap.Point(self._longitude, self._latitude);
						map.removeOverlay(mk);
						mk = new BMap.Marker(point, {
							// 初始化五角星symbol
							icon : new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
								scale : 2,
								strokeWeight : 6,
								strokeColor : "red",
								fillColor : "RED",
								fillOpacity : 1
							})
						});
						mk.setAnimation(BMAP_ANIMATION_BOUNCE);
						map.addOverlay(mk);
					} else {
						swal({
							title : "警告",
							text : "你所在的位置不在手绘地图内！",
							confirmButtonText : "确定"
						});
						$("#navigators").attr("flag", "0");
						$("#navigators").attr("src", "../youli/images/dingweiClose.png");
						localStorage.setItem("yldt", "0");
						clearInterval(sh);
						map.removeOverlay(mk);
					}
				}
				sh = setInterval(window._location(), 1000);
			}
		}

	};
	Model.prototype.bakCenterClick = function(event) {
		map.centerAndZoom(new BMap.Point(this._coordinate.split(',')[0], this._coordinate.split(',')[1]), 16);
	};

	Model.prototype.jingdianDataCustomRefresh = function(event) {
		var self = this;
		self._id = this.getContext().getRequestParameter("id");
		self._map = this.getContext().getRequestParameter("map");
		self._coordinate = this.getContext().getRequestParameter("coordinate");
		var data = event.source;
		var params = {
			"belongJingqu" : this._id
		};

		var success = function(resultData) {
			var append = event.options && event.options.append;
			data.loadData(resultData, append);
		};
		baas.sendRequest({
			"url" : "/ylapp",
			"action" : "queryJingdian",
			"params" : params,
			"success" : success
		});
	};

	Model.prototype.modelActive = function(event) {
		var self = this;
		if (self._id != "undefind") {
			self.loadSHMap(self._map, self._coordinate);
			if (localStorage.getItem("yldt") == "1") {
				$("#navigators").attr("flag", "1");
				$("#navigators").attr("src", "../MFyouli/images/dingweiOpen.png");
				self.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
				self.wxApi.exec().done(function(wx) {
					wx.getLocation({
						type : 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
						success : function(res) {
							self._latitude = res.latitude;
							self._longitude = res.longitude;

						}
					});
				})
				window._location = function() {
					if (self._longitude > 126.526357 && self._longitude < 126.540191 && self._latitude < 43.854473 && self._latitude > 43.843317) {
						var point = new BMap.Point(self._longitude, self._latitude);
						map.removeOverlay(mk);
						mk = new BMap.Marker(point, {
							// 初始化五角星symbol
							icon : new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
								scale : 2,
								strokeWeight : 6,
								strokeColor : "red",
								fillColor : "RED",
								fillOpacity : 1
							})
						});
						mk.setAnimation(BMAP_ANIMATION_BOUNCE);
						map.addOverlay(mk);
					} else {
						swal({
							title : "警告",
							text : "你所在的位置不在手绘地图内！",
							confirmButtonText : "确定"
						});
						$("#navigators").attr("flag", "0");
						$("#navigators").attr("src", "../MFyouli/images/dingweiClose.png");
						localStorage.setItem("yldt", "0");
						clearInterval(sh);
						map.removeOverlay(mk);
					}
				}
				sh = setInterval(window._location(), 1000);
			}
		}
	};
	Model.prototype.navigatorsClick = function(event) {
		var self = this;
		if ($("#navigators").attr("flag") == "0") {
			swal({
				title : "提示",
				text : "你确定要在手绘地图中显示自己的位置吗？",
				type : "warning",
				showCancelButton : true,
				confirmButtonColor : "#DD6B55",
				confirmButtonText : "确定",
				cancelButtonText : "取消",
				closeOnConfirm : false
			}, function() {
				$("#navigators").attr("flag", "1");
				$("#navigators").attr("src", "../MFyouli/images/dingweiOpen.png");
				localStorage.setItem("yldt", "1");
				window._location = function() {
					if (self._longitude > 126.526357 && self._longitude < 126.540191 && self._latitude < 43.854473 && self._latitude > 43.843317) {
						var point = new BMap.Point(self._longitude, self._latitude);
						map.removeOverlay(mk);
						mk = new BMap.Marker(point, {
							// 初始化五角星symbol
							icon : new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
								scale : 2,
								strokeWeight : 6,
								strokeColor : "red",
								fillColor : "RED",
								fillOpacity : 1
							})
						});
						mk.setAnimation(BMAP_ANIMATION_BOUNCE);
						map.addOverlay(mk);
					} else {
						swal({
							title : "警告",
							text : "你所在的位置不在手绘地图内！",
							confirmButtonText : "确定"
						});
						$("#navigators").attr("flag", "0");
						$("#navigators").attr("src", "../MFyouli/images/dingweiClose.png");
						localStorage.setItem("yldt", "0");
						clearInterval(sh);
						map.removeOverlay(mk);
					}
				}
				sh = setInterval(window._location(), 1000);
			});
		} else {
			$("#navigators").attr("flag", "0");
			$("#navigators").attr("src", "../MFyouli/images/dingweiClose.png");
			localStorage.setItem("yldt", "0");
			clearInterval(sh);
			map.removeOverlay(mk);
		}
	};

	Model.prototype.closeWin = function(event) {
		var audio = document.getElementById("audioplayer");
		audio.volume = 1;
		audio.pause();
		$("#yuyin").html("语音解说");
		$("#yuyinicon").attr("src", "../MFyouli/images/yuyin2.png")
		$(".panelInfo").animate({
			height : "0px",
			bottom : "0px"
		}, 500, function() {

		});
	}
	Model.prototype.autio = function(event) {
		var audio = document.getElementById("audioplayer");
		audio.volume = 1;
		if (audio.paused == true) {
			audio.play();
			$("#yuyin").html("解说中...");
			$("#yuyinicon").attr("src", "../MFyouli/images/yuyin1.png")
		} else {
			audio.pause();
			$("#yuyin").html("语音解说");
			$("#yuyinicon").attr("src", "../MFyouli/images/yuyin2.png")
		}
	}
	return Model;
});