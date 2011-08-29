/*
** Demo app's interaction handler
*/

demo = {};
demo.update = {};

demo.update.provision = function (val) {
	privacy.changeBg("provision_main", { "backgroundPosition" : "0 512px" });
	privacy.NODE.setAttribute("provision", val);
	privacy.render.provision();
}
demo.update.perversion = function (obj) {
	var val;
	if (obj.checked) {
		val = parseInt(privacy.NODE.getAttribute("perversion")) + parseInt(obj.value);
		privacy.NODE.setAttribute("perversion", val);
	} else {
		val = parseInt(privacy.NODE.getAttribute("perversion")) - parseInt(obj.value);
		privacy.NODE.setAttribute("perversion", val);
	}
	privacy.changeBg("perversion_" + parseInt(obj.value),  { "visibility" : "visible" })
	privacy.render.perversion();
}
demo.update.persistence = function (val) {
	var timeSpan = [ 12, 3, 1, 0 ];
	for ( var i in timeSpan ) {
		privacy.changeBg("persistence_" + timeSpan[i], { "visibility" : "visible" });
	}
	privacy.NODE.setAttribute("persistence", val);
	privacy.render.persistence();
}