define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var Model = function() {
		this.callParent();
		this._id;
	};
	_this = this;
	Model.prototype.jingdianDataCustomRefresh = function(event) {
		this._id = this.getContext().getRequestParameter("id")
		var self = this;
		var data = event.source;
		var params = {
			"belongJingqu" : this._id
		};

		var success = function(resultData) {
			var append = event.options && event.options.append;
			data.loadData(resultData, append);
			data.each(function(data) {
				var str = "<table  class='aaa' style='float:left;width:32%;'>" + "<tr>" + "<td  style='border:5px solid #f0f0f0;background-color:#f0f0f0;' align='center'>"
						+ "<img  style='width:100px;height:70px;border:5px solid white;' src='"
						+ baas.RESC_URL
						+ data.row.val("fImage")
						+ "'/>"
						+ "</td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td style='border:5px solid #f0f0f0;background-color:#f0f0f0;' align='center'>"
						+ "<span class='nam' style='font-size:12px;'>"
						+ data.row.val("fName")
						+ "</span>"
						+ "<span class='sou' style='display:none;'>"
						+ data.row.val("fSound")
						+ "</span>"
						+ "<span class='ima' style='display:none;'>"
						+ data.row.val("fImage")
						+ "</span>"
						+ "<span class='int' style='display:none;'>"
						+ data.row.val("fIntroduce")
						+ "</span>"
						+ "</td>" + "</tr>" + "</table>"
				$("#scenicList").append(str);
				$(".aaa").click(function() {
					self.comp("windowDialog1").open({
						data : {
							sound : $(this).find("span.sou").html(),
							name : $(this).find("span.nam").html(),
							introduce : $(this).find("span.int").html(),
							image : $(this).find("span.ima").html()
						}
					})
				});
			})
		};
		baas.sendRequest({
			"url" : "/ylapp",
			"action" : "queryJingdian",
			"params" : params,
			"success" : success
		});
	};

	return Model;
});
