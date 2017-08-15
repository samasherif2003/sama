document.getElementById("header").style.height = window.innerHeight / 3 + "px"; // .header height
document.getElementById("blog-title").style.top = window.innerHeight / 12 + "px"; // #blog-title top
document.getElementById("blog-title").style.fontSize = ((72 / 225.3) * window.innerHeight / 3) + "px"; // #blog-title font-size
document.getElementById("blog-subtitle").style.fontSize = ((16 / 225.3) * window.innerHeight / 3) + "px"; // #blog-subtitle font-size
document.getElementById("blog-subtitle").style.top = window.innerHeight / 12 + ((72 / 225.3) * window.innerHeight / 3 + ((16 / 225.3) * window.innerHeight / 3) / 2) + "px"; // #blog-subtitle top
document.getElementById("header-img").style.bottom = window.innerHeight / 6 + "px";

document.body.onresize = function() {
  document.getElementById("header").style.height = window.innerHeight / 3 + "px"; // .header height
  document.getElementById("blog-title").style.top = window.innerHeight / 12 + "px"; // #blog-title top
  document.getElementById("blog-title").style.fontSize = ((72 / 225.3) * window.innerHeight / 3) + "px"; // #blog-title font-size
  document.getElementById("blog-subtitle").style.fontSize = ((16 / 225.3) * window.innerHeight / 3) + "px"; // #blog-subtitle font-size
  document.getElementById("blog-subtitle").style.top = window.innerHeight / 12 + ((72 / 225.3) * window.innerHeight / 3 + ((16 / 225.3) * window.innerHeight / 3) / 2) + "px"; // #blog-subtitle top
  if (window.innerHeight < window.innerWidth) {
    document.getElementById("header-img").style.width = "100%";
    document.getElementById("header-img").style.bottom = "200px";
  } else {
    document.getElementById("header-img").style.width = "auto";
    document.getElementById("header-img").style.bottom = "500px";
  }
};
