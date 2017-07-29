// ==UserScript==
// @name           Post Review
// @namespace      GeonoTRON2000
// @description    Adds like and dislike buttons to posts.
// @version        1.1
// @include        *://scratch.mit.edu/forums/*
// @include        *://*.scratch.mit.edu/forums/*
// @include        *://scratch.mit.edu/tbgforums/*
// @include        *://*.scratch.mit.edu/tbgforums/*
// @include        *://*.punbb-hosting.com/*
// ==/UserScript==

var posts = document.getElementsByClassName("blockpost");
var i;

for (i = 0; i < posts.length; i++) {
  var post = posts[i];
  var post_id = parseInt(post.id.substr(1));
  var post_url = self.location.protocol+"//"+self.location.host+self.location.pathname+"?pid="+encodeURIComponent(post_id)+"#p"+encodeURIComponent(post_id);
  var postreview = document.createElement("table");
  postreview.border = "0";
  var prbody = document.createElement("tbody");
  postreview.appendChild(prbody);
  var buttonrow = document.createElement("tr");
  buttonrow.style.minHeight = "64px";
  var numrow = document.createElement("tr");
  numrow.style.minHeight = "9px";
  prbody.appendChild(buttonrow);
  prbody.appendChild(numrow);
  var likecontainer = document.createElement("td");
  var dislikecontainer = document.createElement("td");
  buttonrow.appendChild(likecontainer);
  buttonrow.appendChild(dislikecontainer);
  var likelink = document.createElement("a");
  likelink.href="http://like.cfagency.org/like.php?site="+encodeURIComponent(post_url);
  var likebtn = document.createElement("img");
  likebtn.src="http://like.cfagency.org/like.png";
  likebtn.width = "64";
  likebtn.height = "64";
  likelink.appendChild(likebtn);
  likecontainer.appendChild(likelink);
  var dislikelink = document.createElement("a");
  dislikelink.href="http://dislike.cfagency.org/like.php?site="+encodeURIComponent(post_url);
  var dislikebtn = document.createElement("img");
  dislikebtn.src="http://dislike.cfagency.org/dislike.png";
  dislikebtn.width = "64";
  dislikebtn.height = "64";
  dislikelink.appendChild(dislikebtn);
  dislikecontainer.appendChild(dislikelink);
  var likecountcontainer = document.createElement("td");
  var dislikecountcontainer = document.createElement("td");
  likecountcontainer.innerHTML = "<img src=\"http://like.cfagency.org/counter.php?site="+encodeURIComponent(post_url)+"\" /> people like this.";
  dislikecountcontainer.innerHTML = "<img src=\"http://dislike.cfagency.org/counter.php?site="+encodeURIComponent(post_url)+"\" /> people dislike this.";
  numrow.appendChild(likecountcontainer);
  numrow.appendChild(dislikecountcontainer);
  if (post.getElementsByClassName("postsignature").length > 0) {
    var siggy = post.getElementsByClassName("postsignature")[0];
    siggy.parentElement.insertBefore(postreview, siggy.nextSibling);
  }
  else {
    var message = post.getElementsByClassName("postmsg")[0];
    message.parentElement.insertBefore(postreview, message.nextSibling);
  }
  postreview.parentElement.insertBefore(document.createElement("hr"), postreview);

}