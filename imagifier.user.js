// ==UserScript==
// @name           Imagifier
// @namespace      GeonoTRON2000
// @description    Converts [img] BBCode tags into images!
// @version        1.3
// @include        *
// ==/UserScript==

// Do the magic!
var posts = document.getElementsByClassName("postright");
var i;
for (i = 0; i < posts.length; i++) {
  posts[i].innerHTML = posts[i].innerHTML.replace(/\[img\]((mailto\:|(news|(ht|f)tp(s?))\:\/\/){1}\S+)\[\/img\]/gi, "<img style=\"max-width: 510px;\" src=\"$1\" alt=\"$1\" />");
  posts[i].innerHTML = posts[i].innerHTML.replace(/imagifier=false/gi, "imagifier=1.3");
}