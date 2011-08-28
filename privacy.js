/*
** Privacy.JS, by Debloper
*/

privacy = {};
privacy.NODE = document.getElementsByTagName("privacy").item(0);

privacy.ids = {};
privacy.ids.main = [ "provision", "perversion", "persistence" ];
privacy.ids.provision = [ "provision_main" ];
privacy.ids.perversion =
[	"perversion_00", "perversion_4", "perversion_01",
			"perversion_2", 	"perversion_1",
	"perversion_10", "perversion_8", "perversion_11"	];
privacy.ids.persistence =
[	"persistence_0", "persistence_12",
	"persistence_1", "persistence_3"	];

privacy.newNode = function (id) {
	var e = document.createElement("div");
	e.setAttribute("id", id);
	return e;
}
privacy.setupNodes = function (ids, parent) {
	var n = ids.length;
	for ( var i = 0; i < n ; i++ ) {
		parent.appendChild(privacy.newNode(ids[i]));
	}
}
privacy.arrangeNodes = function (nodes) {
	privacy.setupNodes(nodes.main, privacy.NODE);
	for ( var i in nodes ) {
		if (i == "main") continue;
		privacy.setupNodes(nodes[i], document.getElementById(i));
	}
}
privacy.changeBg = function (id, pos) {
	var i, j;
	for ( i in pos ) { j = pos[i] }			// Inefficient, I guess. Well, later.
	document.getElementById(id).style[i] = j;
}
privacy.render = {};
privacy.render.provision = function () {
	if ( privacy.NODE.getAttribute("provision") == "open" ) {
		privacy.changeBg("provision_main", { "backgroundPosition" : "0 256px" });
	}
}
privacy.render.perversion = function () {
	var val = privacy.NODE.getAttribute("perversion");
	for ( var i = 8; i >= 1; i /= 2 ) {
		if ( val/i >= 1 ) {
			privacy.changeBg("perversion_" + i, { "visibility" : "hidden" });
			val %= i;
		}
	}
}
privacy.render.persistence = function () {
	var val = privacy.NODE.getAttribute("persistence");
	var timeSpan = [ 12, 3, 1, 0 ];
	for ( var i in timeSpan ) {
		if ( val <= timeSpan[i] ) {
			privacy.changeBg("persistence_" + timeSpan[i], { "visibility" : "hidden" });
		} else return true;
	}
}
privacy.parsePrivacy = function () {
	privacy.render.provision();
	privacy.render.perversion();
	privacy.render.persistence();
}

privacy.arrangeNodes(privacy.ids);		// Let's fire-up the chain-cracker!
privacy.parsePrivacy();					// And, call 911 to report a blast!
