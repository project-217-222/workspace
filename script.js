const game=document.querySelector(".topright");
const about=document.querySelector(".bottomright");
const feed=document.querySelector(".bottomleft");
const learn=document.querySelector(".topleft");
game.addEventListener("click", function(e){
   e.preventDefault();
    window.location.href="/game.html";
  })
  learn.addEventListener("click", function(e){
    e.preventDefault();
     window.location.href="/workspace/learn.html";
   })
   feed.addEventListener("click", function(e){
    e.preventDefault();
     window.location.href="/workspace/feed.html";
   })
   about.addEventListener("click", function(e){
    e.preventDefault();
     window.location.href="/workspace/about.html";
   })
