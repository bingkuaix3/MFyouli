define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var data;
	var deliciousData;
	var Model = function() {
		this.callParent();
		this._fID;

	};
	_justep = justep;
	Model.prototype.pageLoad = function(event) {
		var self = this;
		$("#jingquTitleName").html(data[0].val("fName"));
		$("#a1").addClass("active-name");
		$(".name").click(function() {
			$(".name").removeClass("active-name");
			$(this).addClass("active-name");
		});
		$(".mainimg").attr("src", baas.RESC_URL + data[0].val("fImage"));
		$("#scenicAudio").attr("src", baas.RESC_URL + data[0].val("fSound"));
		$("#scenicIntroduce").html(data[0].val("fIntroduce") + "<a href='#' style='font-size:13px;' >更多详情>><a/>");
		$("#scenicAddress").html(data[0].val("fAddress"));
		$("#scenicPath").append(data[0].val("fBus"));
		$("#scenicPath").append(data[0].val("fTaxi"));
		$("#content1").show();
		$("#scenicIntroduce").bind("click", function() {
			self.comp("windowDialog1").open({
				data : {
					name : data[0].val("fName"),
					image : data[0].val("fImage"),
					detail1title : data[0].val("fDetail1Title"),
					detail1image : data[0].val("fDetail1Image"),
					detail1content : data[0].val("fDetail1Content"),
					detail2title : data[0].val("fDetail2Title"),
					detail2image : data[0].val("fDetail2Image"),
					detail2content : data[0].val("fDetail2Content"),
					detail3title : data[0].val("fDetail3Title"),
					detail3image : data[0].val("fDetail3Image"),
					detail3content : data[0].val("fDetail3Content"),
					detail4title : data[0].val("fDetail4Title"),
					detail4image : data[0].val("fDetail4Image"),
					detail4content : data[0].val("fDetail4Content")
				}
			})
		})
	};
	Model.prototype.scenicMapJump = function(event) {
		justep.Portal.openWindow(require.toUrl("$UI/MFyouli/scenicMap.w?id="+data[0].val("fID")+"&map="+data[0].val("fMap")+"&coordinate="+data[0].val("fCoordinate")));
	}
	Model.prototype.scenicListJump = function(event) {
		justep.Portal.openWindow(require.toUrl("$UI/MFyouli/scenicList.w?id="+data[0].val("fID")));
	}
	Model.prototype.audioPlay = function(event) {
		var audio = document.getElementById("scenicAudio");
		audio.volume = 1;
		if (audio.paused == true) {
			audio.play();
			$("#scenicAutioImg").attr("src", "../MFyouli/images/yuyin2.png");
		} else {
			audio.pause();
			$("#scenicAutioImg").attr("src", "../MFyouli/images/yuyin1.png");
		}
	}
	Model.prototype.modelLoad = function(event) {
		this.pageLoad();
		this.delicious();
	};
	Model.prototype.delicious = function(event) {

		deliciousData.each(function(data) {
			introduce = data.row.val('fIntroduce');
			if (introduce.length > 30) {
				introduce = introduce.substring(0, 30) + "...";
			}
			$("#deliciousDiv").append(
					"<table style='background-color:white;text-align:left;margin-top:2px' onclick='deliciousJump(\"" + data.row.val('fName') + "\",\"" + data.row.val('fIntroduce') + "\",\""
							+ data.row.val('fAddress') + "\",\"" + data.row.val('fCoordinate') + "\",\"" + data.row.val('fPictrue1') + "\",\"" + data.row.val('fPictrue2') + "\",\""
							+ data.row.val('fPictrue3') + "\",\"" + data.row.val('fPictrue4') + "\")' style='width:100%;border-bottom:1px solid #f0f0f0;'>" + "	<tr>"
							+ "		<td align='center' style=' width:120px; height:70px;'>" + "			<img src='" + baas.RESC_URL + data.row.val('fPictrue1') + "' style='width:100px;height:50px;'/>"
							+ "		</td>" + "		<td>" + "		 	<div style='width:100%;'>" + data.row.val('fName') + "</div>" + "		 	<div style='width:100%;height:35px;'>" + introduce + "</div>"
							+ "		</td>" + "	</tr>" + "</table>");
		})

	}

	Model.prototype.haochiDataCustomRefresh = function(event) {
		var self = this;
		this._fID = self.getContext().getRequestParameter('fID');
		data = self.getParent().comp('jingquData').find([ 'fID' ], [ self._fID ]);
		if (data.length > 0) {
			deliciousData = event.source;
			// var data1 = self.comp("haochiData");
			var params = {
				"belongScenic" : self._fID
			};
			var success = function(resultData) {
				var append = event.options && event.options.append;
				deliciousData.loadData(resultData, append);
			};
			baas.sendRequest({
				"url" : "/ylapp",
				"action" : "queryHaochi",
				"params" : params,
				"success" : success
			});
		}
	};

	return Model;
});
var _justep;
function deliciousJump(fName, fIntroduce, fAddress, fCoordinate, fPictrue1, fPictrue2, fPictrue3, fPictrue4) {
	_justep.Portal.openWindow("$UI/MFyouli/delicious.w?fName=" + fName + "&fIntroduce=" + fIntroduce + "&fAddress=" + fAddress + "&fCoordinate=" + fCoordinate + "&fPictrue1=" + fPictrue1
			+ "&fPictrue2=" + fPictrue2 + "&fPictrue3=" + fPictrue3 + "&fPictrue4=" + fPictrue4);
}
