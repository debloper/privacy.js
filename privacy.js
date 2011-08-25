/*
** Privacy.JS, by Debloper
*/

privacy = {};
privacy.NODE = document.getElementsByTagName("privacy").item(0);
privacy.ids = {};
privacy.ids.main = [ "provision", "perversion", "persistence" ];

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
