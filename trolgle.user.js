// ==UserScript==
// @name           Trolgle
// @namespace      me
// @description    Turns google into Trolgle.
// @version        1.7
// @include        *://google.com/*
// @include        *://www.google.com/*
// ==/UserScript==

function troll() {
if (!document.body) {
  document.body = document.getElementsByTagName("body")[0];
}

// Edit the GBar
var gbars = document.getElementsByClassName("gbts");
if (gbars[0] != undefined) {
gbars[0].innerHTML = '+Troll';
}
gbars[4].innerHTML = 'Troll';
gbars[5].innerHTML = 'YouTroll';
gbars[6].innerHTML = 'New Trolls';
gbars[7].innerHTML = 'TrollMail';
gbars[8].innerHTML = 'Troll Papers';
gbars[9].innerHTML = 'Plan Trolls';
if (document.getElementById('gbztms1') != null) {
document.getElementById('gbztms1').innerHTML = 'More Trolling';
}
// End

document.body.style.backgroundImage = "url('http://img.thegt.org/trollface.svg')";
document.body.style.backgroundColor = "#FFFFFF";
document.body.style.backgroundRepeat = "repeat-y";
if (window.location.pathname == "/search") {
document.body.style.backgroundSize = "contain";
document.getElementById("gbq1").firstChild.firstChild.firstChild.style.backgroundImage = "url('http://img.thegt.org/trolgle.png')";
document.getElementById("gbq1").firstChild.firstChild.firstChild.style.backgroundSive = "contain";
}
else {
document.body.style.backgroundSize = "cover";
document.getElementById("hplogo").src = "http://img.thegt.org/trolgle.png";
document.getElementById("hplogo").width = "304";
document.getElementById("hplogo").height = "98";
document.getElementsByName("btnK")[0].value = "Troll Search";
document.getElementsByName("btnI")[0].value = "I'm Feeling Trolly";
}
document.title = "Trolgle";
}

troll(); 	