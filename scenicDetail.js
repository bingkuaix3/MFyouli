define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.windowReceiver1Receive = function(event) {
		$(".x-titlebar-title").html(event.data.name + "详情");
		 if (event.data.name != "null") {
			$("#jingquimg").attr("src", baas.RESC_URL +event.data.image);
			if (event.data.detail1title != "" && event.data.detail1title != "null") {
				$("#details1title").html(event.data.detail1title);
				$("#details1img").attr("src", baas.RESC_URL + event.data.detail1image);
				$("#details1content").html(event.data.detail1content);
				$("#details1").css("display", "block");
			}
			if (event.data.detail2title != "" && event.data.detail2title != "null") {
				$("#details2title").html(event.data.detail2title);
				$("#details2img").attr("src", baas.RESC_URL + event.data.detail2image);
				$("#details2content").html(event.data.detail2content);
				$("#details2").css("display", "block");
			}
			if (event.data.detail3title != "" && event.data.detail3title != "null") {
				$("#details3title").html(event.data.detail3title);
				$("#details3img").attr("src", baas.RESC_URL + event.data.detail3image);
				$("#details3content").html(event.data.detail3content);
				$("#details3").css("display", "block");
			}
			if (event.data.detail4title != "" && event.data.detail4title != "null") {
				$("#details4title").html(event.data.detail4title);
				$("#details4img").attr("src", baas.RESC_URL + event.data.detail4image);
				$("#details4content").html(event.data.detail4content);
				$("#details4").css("display", "block");
			}
		}

	};

	return Model;
});