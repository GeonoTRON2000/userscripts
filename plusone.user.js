// ==UserScript==
// @name           +1 Button for Scratch Forums
// @description    +1 Button for the Scratch Forums
// @namespace      GeonoTRON2000
// @version        1.0
// @include        *://scratch.mit.edu/forums/*
// @include        *://*.scratch.mit.edu/forums/*
// @include        *://scratch.mit.edu/tbgforums/*
// @include        *://*.scratch.mit.edu/tbgforums/*
// ==/UserScript==

var html = document.getElementsByTagName("html")[0];
var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];
var poneScript = document.createElement("script");
poneScript.innerHTML = "  (function() {\r\n    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;\r\n    po.src = 'https://apis.google.com/js/plusone.js';\r\n    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);\r\n  })();";
head.appendChild(poneScript);

var posts = document.getElementsByClassName("postmsg");
var i;

for (i = 0; i < posts.length; i++) {
  posts[i].innerHTML = posts[i].innerHTML.replace(/\[gpone=inline\]/gi, "<g:plusone annotation=\"inline\"></g:plusone>");
  posts[i].innerHTML = posts[i].innerHTML.replace(/\[gpone=bubble\]/gi, "<g:plusone></g:plusone>");
  posts[i].innerHTML = posts[i].innerHTML.replace(/\[gpone=none\]/gi, "<g:plusone annotation=\"none\"></g:plusone>");
}