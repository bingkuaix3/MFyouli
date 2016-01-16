define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("cordova!org.apache.cordova.device");

	// 主页面配置
	var Model = function() {
		this._latitude;
		this._longitude;
		this._city;
		this.callParent();
	};
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf7e99c474fcc59f7&redirect_uri=http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2FMFyouli%2Findex.w&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	// http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2FMFyouli%2Fhome.w
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
								if (self._latitude != null && self._longitude != null && self._city != null) {
									window.location.href = require.toUrl("$UI/MFyouli/home.w?latitude=" + self._latitude + "&longitude=" + self._longitude + "&city=" + self._city);
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
});