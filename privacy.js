/*
** Privacy.JS, by Debloper
*/

privacy = {};
privacy.NODE = document.getElementsByTagName("privacy").item(0);

privacy.newNode = function (id) {
	var e = document.createElement("div");
	e.setAttribute("id", id[i]);
	return e;
}
privacy.provision = privacy.newNode("provision");
privacy.perversion = privacy.newNode("perversion");
privacy.persistence = privacy.newNode("persistence");
privacy.NODE.appendChild(privacy.provision);
privacy.NODE.appendChild(privacy.perversion);
privacy.NODE.appendChild(privacy.persistence);
