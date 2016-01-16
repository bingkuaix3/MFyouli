define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/MFyouli/baas");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.windowReceiver1Receive = function(event) {
		$("#jdYuyins").attr("src", baas.RESC_URL + event.data.sound);
		$("#jingdianListYuyinTitle").html(event.data.name);
		$("#jingdianImages").attr("src", baas.RESC_URL + event.data.image);
		$("#jingdianIntroduce").html(event.data.introduce);
		$("#jingdianListYuyinContent").show();
	};

	return Model;
});
function yuyinPlayer() {
	var audio = document.getElementById("jdYuyins");
	audio.volume = 1;
	if (audio.paused == true) {
		audio.play();
		$("#jdYuyinImage").attr("src", "../MFyouli/images/yuyin2.png");
		setInterval(function() {
			$("#progress").css("width", toProgress(audio.currentTime, audio.duration) + "%");
			if (audio.paused == true) {
				$("#jdYuyinImage").attr("src", "../MFyouli/images/yuyin1.png");
			} else {
				$("#jdYuyinImage").attr("src", "../MFyouli/images/yuyin2.png")
			}
			if (audio.ended == true) {
				$("#progress").css("width", "0px");
			}
		}, 10);
	} else {
		audio.pause();
		$("#jdYuyinImage").attr("src", "../MFyouli/images/yuyin1.png")
	}
}
// 语音进度
function toProgress(seconds, total) {
	return parseInt((seconds / total) * 100);
}