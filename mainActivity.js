define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var data;
	_justep = justep;
	var Model = function() {
		this.callParent();
		this._city;
		this._CityId;
	};

	Model.prototype.loadBaiduMap = function() {
		var self = this;
		var id = this.getIDByXID("baiduMap");
		window._baiduInit = function() {
			// 创建Map实例
			map = new BMap.Map(id, {
				enableMapClick : true
			});
			map.centerAndZoom(self._city, 11); // 初始化地图,设置中心点坐标和地图级别
			// map.setCurrentCity(self._city); // 设置地图显示的城市 此项是必须设置的
			// map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
			map.panBy(-20, 80);
			var myIcon = new BMap.Icon("../MFyouli/images/jingdian.png", new BMap.Size(20, 28));
			if (data.getCount() > 0) {
				data.each(function(data) {
					var marker = new BMap.Marker(new BMap.Point(data.row.val("fCoordinate").split(",")[0], data.row.val("fCoordinate").split(",")[1]), {
						icon : myIcon
					});
					marker.addEventListener("click", function(e) {
						justep.Portal.openWindow(require.toUrl("$UI/MFyouli/scenic.w?fID=" + data.row.val("fID")));
					});
					var label = new BMap.Label(
							"<span style='width:100px;font-size:13px;height:17px;padding:3px; border:1px solid#41b5e8;border-radius:3px; background-color:#f0f0f0;color:black;text-decoration:none'>"
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
			"async" : false,
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
	Model.prototype.loadList = function(event) {
		$("#listTitleName").html(this._city + "景区列表");
		if (data.getCount() > 0) {
			data
					.each(function(data) {
						introduce = data.row.val('fIntroduce');
						if (introduce.length > 62) {
							introduce = introduce.substring(0, 62) + "......";
						}
						var jignqus = "<table onclick='goToJingqu(\""
								+ data.row.val("fID")
								+ "\")' "
								+ "' component='$UI/system/components/bootstrap/table/table' style='background-color:#fff;width:100%; font-size:13px; border:0px; margin-top:5px; height:90px;border-bottom:1px solid #f0f0f0;'>"
								+ "<tr> " + "<td align='center' style='padding:5px;'>" + " 	<img style='height:80px;' src='" + baas.RESC_URL + data.row.val('fImage') + "'/>" + "</td>"
								+ "<td style='padding-left:10px;'> " + "<table style='width:100%;height:100%;'>" + "<tr>"
								+ "<td style='padding-left:auto;font-size:17px;line-height:30px;font-family:黑体;font-weight:bold;'>" + data.row.val('fName') + "</td>" + "</tr>" + "<tr>"
								+ "<td style='padding:0 0 5px 0;font-size:13px;'>" + introduce + "</td>" + "</tr>" + "</table></td>" + "</tr>" + "</table>";
						$("#listPanelContent").append(jignqus);
					});
		}
	};
	Model.prototype.modelLoad = function(event) {
		data = this.getParent().comp("jingquData");
		info = this.getParent().comp("infoData");
		this._city = info.getFirstRow().val("city");
		this._CityId = data.getFirstRow().val("fCityId");
		this.loadWeather();
		this.loadBaiduMap();
		this.loadList();
	};

	return Model;
});
var _justep;
function goToJingqu(id) {
	_justep.Portal.openWindow("$UI/MFyouli/scenic.w?fID=" + id);
}
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