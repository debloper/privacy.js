/*
** Demo app's interaction handler
*/

demo = {};
demo.update = {};

demo.update.provision = function (val) {
	privacy.changeBg("provision_main", { "backgroundPosition" : "0 512px" });
	privacy.NODE.setAttribute("provision", val);
	privacy.render.provision();
	demo.update.markup();
}
demo.update.perversion = function (obj) {
	var val;
	if (obj.checked) {
		val = parseInt(privacy.NODE.getAttribute("perversion")) + parseInt(obj.value);
		privacy.NODE.setAttribute("perversion", val);
		obj.parentNode.className = "active";
	} else {
		val = parseInt(privacy.NODE.getAttribute("perversion")) - parseInt(obj.value);
		privacy.NODE.setAttribute("perversion", val);
		obj.parentNode.className = "passive";
	}
	privacy.changeBg("perversion_" + parseInt(obj.value),  { "visibility" : "visible" })
	privacy.render.perversion();
	demo.update.markup();
}
demo.update.persistence = function (val) {
	var timeSpan = [ 12, 3, 1, 0 ];
	for ( var i in timeSpan ) {
		privacy.changeBg("persistence_" + timeSpan[i], { "visibility" : "visible" });
	}
	privacy.NODE.setAttribute("persistence", val);
	privacy.render.persistence();
	demo.update.markup();
}

demo.update.phraud = function (obj, target) {
	var classes = obj.parentNode.className;
	var targets = document.getElementById(target).childNodes;
	if (obj.checked) {
		classes = classes.replace(/\bphraudOff\b/,'');
		classes += " phraudOn";
		obj.parentNode.getElementsByTagName("span").item(0).innerHTML = "Phrauds!";
		for ( var i in targets ) {
			targets.item(i).style.backgroundImage = "url(phraud.png)";
		}
	} else {
		classes = classes.replace(/\bphraudOn\b/,'');
		classes += " phraudOff";
		obj.parentNode.getElementsByTagName("span").item(0).innerHTML = "Frauds?";
		for ( var i in targets ) {
			targets.item(i).style.backgroundImage = "url(privacy.png)";
		}
	}
	obj.parentNode.className = classes;
	demo.update.markup();
}
demo.update.markup = function () {
	var node = privacy.NODE, attrib = privacy.ids.main,
	provision = "<br />\tprovision=&quot;" + node.getAttribute(attrib[0]) + "&quot;",
	perversion = "<br />\tperversion=&quot;" + node.getAttribute(attrib[1]) + "&quot;",
	persistence = "<br />\tpersistence=&quot;" + node.getAttribute(attrib[2]) + "&quot;";
	var innerHTML = "&lt;privacy" + provision + perversion + persistence + " &gt;<br />&lt;\/privacy&gt;";
	//alert(innerHTML);
	document.getElementById("markup").innerHTML = innerHTML;
}

demo.update.markup();
