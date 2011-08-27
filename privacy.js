/*
** Privacy.JS, by Debloper
*/

privacy = {};
privacy.NODE = document.getElementsByTagName("privacy").item(0);

privacy.ids = {};
privacy.ids.main = [ "provision", "perversion", "persistence" ];
privacy.ids.provision = [ "provision_main" ];
privacy.ids.perversion =
[	"perversion_00", "perversion_01", "perversion_02",
			"perversion_10", 	"perversion_11",
	"perversion_20", "perversion_21", "perversion_22"	];
privacy.ids.persistence =
[	"persistence_1st", "persistence_2nd",
	"persistence_3rd", "persistence_4th"	];

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
	var val = privacy.NODE.getAttribute("provision");
	if ( val == "open" ) {
		privacy.changeBg("provision_main", { "backgroundPosition" : "0 256px" });
	}
}
privacy.render.perversion = function () {
	var val = privacy.NODE.getAttribute("perversion");
	var hidden = { "visibility" : "hidden" };
	if ( val/8 >= 1 ) {
		privacy.changeBg("perversion_21", hidden);
		val = val%8;
	} if ( val/4 >= 1 ) {
		privacy.changeBg("perversion_01", hidden);
		val = val%4;
	} if ( val/2 >= 1 ) {
		privacy.changeBg("perversion_10", hidden);
		val = val%2;
	} if ( val >= 1 ) {
		privacy.changeBg("perversion_11", hidden);
		// We can use a for-loop here more efficiently. This is miserable!
	}
}
privacy.render.persistence = function () {
	var val = privacy.NODE.getAttribute("persistence");
	var hidden = { "visibility" : "hidden" };
	if ( val <= 12 ) {
		privacy.changeBg("persistence_2nd", hidden);
	} if ( val <= 3 ) {
		privacy.changeBg("persistence_4th", hidden);
	} if ( val <= 1 ) {
		privacy.changeBg("persistence_3rd", hidden);
	} if ( val <= 0 ) {
		privacy.changeBg("persistence_1st", hidden);
	}
//	privacy.changeBg(document.getElementById("persistence").childNodes.item(0).id, { "visibility" : "hidden" });
}
privacy.parsePrivacy = function () {
	privacy.render.provision();
	privacy.render.perversion();
	privacy.render.persistence();
}

privacy.arrangeNodes(privacy.ids);		// Let's fire-up the chain-cracker!
privacy.parsePrivacy();					// And, call 911 to report a blast!
