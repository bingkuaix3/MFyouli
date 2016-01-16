define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		$(".x-titlebar-title").html(this.getContext().getRequestParameter("fName"));
		$("#deliciousInfo").append("<img style='width:96%;margin-left:2%;margin-top:10px;' src='" + baas.RESC_URL + this.getContext().getRequestParameter("fPictrue1") + "'/>");
		$("#deliciousInfo").append("<div style='width:96%;margin-left:2%;margin-top:10px;padding:5px;background-color:white;'>" + this.getContext().getRequestParameter("fIntroduce") + "</div>");
		$("#deliciousInfo").append(
				"<div style='width:96%;margin-left:2%;margin-top:10px;padding:5px;background-color:white;'>" + "	<span style='float:left;color:#3ba030;margin-right:5px;'>地址:</span>"
						+ this.getContext().getRequestParameter("fAddress") + "</div>");
		if (this.getContext().getRequestParameter("fPictrue2") != null) {
			$("#deliciousInfo").append("<img style='width:96%;margin-left:2%;margin-top:10px;' src='" + baas.RESC_URL + this.getContext().getRequestParameter("fPictrue2") + "'/>");
		}
		if (this.getContext().getRequestParameter("fPictrue3") != null) {
			$("#deliciousInfo").append("<img style='width:96%;margin-left:2%;margin-top:10px;' src='" + baas.RESC_URL + this.getContext().getRequestParameter("fPictrue3") + "'/>");
		}
		if (this.getContext().getRequestParameter("fPictrue4") != null) {
			$("#deliciousInfo").append("<img style='width:96%;margin-left:2%;margin-top:10px;' src='" + baas.RESC_URL + this.getContext().getRequestParameter("fPictrue4") + "'/>");
		}
	};

	return Model;
});