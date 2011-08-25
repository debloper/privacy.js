/*
** Privacy.JS, by Debloper
*/

privacy = {};
privacy.NODE = document.getElementsByTagName("privacy").item(0);

privacy.ids = {};
privacy.ids.main = [ "provision", "perversion", "persistence" ];
privacy.ids.provision = [ "provision_main" ];
privacy.ids.perversion = [ "perversion_top", "perversion_middle", "perversion_bottom" ];
privacy.ids.persistence = [ "persistence_1st", "persistence_2nd", "persistence_3rd", "persistence_4th" ];

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
privacy.setupNodes(privacy.ids.main, privacy.NODE);

privacy.PROVISION = document.getElementById("provision");
privacy.PERVERSION = document.getElementById("perversion");
privacy.PERSISTENCE = document.getElementById("persistence");
privacy.setupNodes(privacy.ids.provision, privacy.PROVISION);
privacy.setupNodes(privacy.ids.perversion, privacy.PERVERSION);
privacy.setupNodes(privacy.ids.persistence, privacy.PERSISTENCE);
