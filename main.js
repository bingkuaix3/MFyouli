define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("cordova!org.apache.cordova.device");
	var jingquData = this.getParent().comp("jingquData");
	var Model = function() {
		this.callParent();
		// this._city;
		// this._latitude;
		// this._longitude;
		this._CityId;

	};
	Model.prototype.loadBaiduMap = function() {
		var self = this;
		jingqu = this.comp("jingquData");
		var id = this.getIDByXID("baiduMap");
		window._baiduInit = function() {
			// 创建Map实例
			map = new BMap.Map(id, {
				enableMapClick : true
			});
			map.centerAndZoom(new BMap.Point(self._longitude, self._latitude), 11); // 初始化地图,设置中心点坐标和地图级别
			map.setCurrentCity(self._city); // 设置地图显示的城市 此项是必须设置的
			// map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
			map.panBy(-20, 80);
			var myIcon = new BMap.Icon("../MFyouli/images/jingdian.png", new BMap.Size(20, 28));
			// 初始化景区
			if (jingqu.getCount() > 0) {
				jingqu.each(function(data) {
					var marker = new BMap.Marker(new BMap.Point(data.row.val("fCoordinate").split(",")[0], data.row.val("fCoordinate").split(",")[1]), {
						icon : myIcon
					});
					marker.addEventListener("click", function(e) {
						justep.Portal.openWindow(require.toUrl("$UI/MFyouli/scenic.w?fID=" + data.row.val("fID")));
					});
					var label = new BMap.Label(
							"<span style='width:100px;font-size:13px; height:17px;padding:3px; border:1px solid #41b5e8;border-radius:3px; background-color:#f0f0f0; color:black;text-decoration:none'>"
									+ data.row.val('fName') + "</span>", {
								offset : new BMap.Size(-(data.row.val('fName').length * 13 / 3), -17)
							});
					label.setStyle({
						// 给label设置样式，任意的CSS都是可以的
						color : "red", // 颜色
						backgroundColor : "black",
						width : "200px",
						height : "18px",
						fontSize : "13px", // 字号
						border : "0", // 边
						textAlign : "center", // 文字水平居中显示
						background : "transparent"
					});
					marker.setLabel(label);
					map.addOverlay(marker);
				});
			}
			setTimeout(function() {
				$(".BMap_cpyCtrl").css("display", "none");
				$(".anchorBL").css("display", "none");
			}, 1000);
		};
		require([ 'http://api.map.baidu.com/api?v=2.0&ak=q3aGfICnLzgY5i4FtjNAnO6O&callback=_baiduInit' ], function() {
			if (window.BMap && window.BMap.Map) {
				window._baiduInit();
			}
		});

	}
	Model.prototype.loadWeather = function(event) {
	
		var self = this;
		$(".head-weather").css("width", ($(".head").width() - $("#city").width() - 5) + "px");
		$("#city").html(self._city);
		var params = {
			"cityName" : self._city,
			"cityId" : self._CityId
		};
		baas.sendRequest({
			"url" : "/ylapp",
			"action" : "queryWeather",
			"async" : true,
			"params" : params,
			"success" : function(resultData, xhr) {
				if (resultData.errMsg == "success") {
					$(".head-weather-tip").css("display", "none");
					wf[0] = '今天 ' + resultData.retData.today.type + " " + resultData.retData.today.fengli + " " + resultData.retData.today.lowtemp + " ~ " + resultData.retData.today.hightemp;
					var today = new Date(resultData.retData.today.date);
					$.each(resultData.retData.forecast, function(idx, item) {
						var curdate = new Date(item.date);
						if (curdate.getFullYear() == addDate(today, 1).getFullYear() && curdate.getMonth() == addDate(today, 1).getMonth() && curdate.getDate() == addDate(today, 1).getDate()) {
							wf[1] = '明天 ' + item.type + " " + item.fengli + " " + item.lowtemp + " ~ " + item.hightemp;
						}
						if (curdate.getFullYear() == addDate(today, 2).getFullYear() && curdate.getMonth() == addDate(today, 2).getMonth() && curdate.getDate() == addDate(today, 2).getDate()) {
							wf[2] = '后天 ' + item.type + " " + item.fengli + " " + item.lowtemp + " ~ " + item.hightemp;
						}
					});
					var $a = "<ul id='x3' style='text-align: center;height:38px;font-size:14px;line-height: 38px;'><li>" + wf[0] + "</li><li>" + wf[1] + "</li><li>" + wf[2] + "</li></ul>"
					$("#weather").append($a);
					setInterval(function() {
						$("#weather").find("#x3").animate({
							marginTop : "-38px"
						}, 2000, function() {
							$(this).css({
								marginTop : "0px"
							}).find("li:first").appendTo(this);
						});
					}, 3000);
				}
			}
		})
	}

	Model.prototype.imgLoad = function(url) {
		return require.toUrl(baas.RESC_URL + url);
	}
	Model.prototype.textLoad = function(text) {
		if (text.length > 53) {
			return text.substring(0, 53) + "...";
		} else
			return text
	}
	Model.prototype.divLoad = function() {
		$(".media").click(function() {
			justep.Portal.openWindow(require.toUrl("$UI/MFyouli/scenic.w?fID=" + $(this).find("div.x-id").html()));
		});
	}
	Model.prototype.modelLoad = function(event) {
		this.loadWeather();
		this.loadBaiduMap();
		this.divLoad();
	};

	return Model;
});

var wf = new Array();
wf[0] = '';
wf[1] = '';
wf[2] = '';
function addDate(dd, dadd) {
	var a = new Date(dd)
	a = a.valueOf()
	a = a + dadd * 24 * 60 * 60 * 1000
	a = new Date(a)
	return a;
}