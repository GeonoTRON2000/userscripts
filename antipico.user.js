// ==UserScript==
// @name           Anti-Pico Censor
// @version        1.1
// @namespace      http://userscripts.thegt.org/
// @description    Un-censors the censors placed on the Scratch Forums for April Fools Day.
// @include        http://scratch.mit.edu/forums/*
// @include        http://www.scratch.mit.edu/forums/*
// ==/UserScript==

var censors = {};
censors["(Pico Rules!!)"] = "the";
censors["(Bloop!!)"] = "and";
censors["Pico's Scratch Forums"] = "Scratch Forums";
censors["(Pico rules - don't get smart!)"] = "th3";
censors["(Pico Still Rules!!)"] = "the";
var target = document.getElementById("punwrap");
var myText = target.innerHTML;
for (censor in censors) {
  myText = myText.replace(makeregex(censor, "g"), censors[censor]);
  document.title = document.title.replace(makeregex(censor, "g"), censors[censor]);
}
target.innerHTML = myText;

function makeregex(str, modifiers) {
  str = str.replace(/\[/gi, '\\\[');
  str = str.replace(/\]/gi, '\\\]');
  str = str.replace(/\^/gi, '\\\^');
  str = str.replace(/\$/gi, '\\\$');
  str = str.replace(/\./gi, '\\\.');
  str = str.replace(/\|/gi, '\\\|');
  str = str.replace(/\?/gi, '\\\?');
  str = str.replace(/\*/gi, '\\\*');
  str = str.replace(/\+/gi, '\\\+');
  str = str.replace(/\(/gi, '\\\(');
  str = str.replace(/\)/gi, '\\\)');
  str = str.replace(/\{/gi, '\\\{');
  str = str.replace(/\}/gi, '\\\}');
  return new RegExp(str, modifiers);
}