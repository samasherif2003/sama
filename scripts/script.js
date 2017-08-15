function getId(name) {
  return document.getElementById(name);
}

function getClass(name) {
  return document.getElementsByClassName(name);
}

function getTag(name) {
  return document.getElementsByTagName(name);
}

function resize() {
  getId("header").style.height = window.innerHeight / 3 + "px"; // .header height
  getId("blog-title").style.top = window.innerHeight / 12 + "px"; // #blog-title top
  getId("blog-title").style.fontSize = ((72 / 225.3) * window.innerHeight / 3) + "px"; // #blog-title font-size
  getId("blog-subtitle").style.fontSize = ((16 / 225.3) * window.innerHeight / 3) + "px"; // #blog-subtitle font-size
  getId("blog-subtitle").style.top = window.innerHeight / 12 + ((72 / 225.3) * window.innerHeight / 3 + ((16 / 225.3) * window.innerHeight / 3) / 2) + "px"; // #blog-subtitle top

  for (var i = 0; i < getClass("tab").length; i++) {
    getClass("tab")[i].style.height = window.innerHeight / 12 + "px";
  }

  for (var i = 1; i <= 3; i++) {
    getId("col" + i).style.top = window.innerHeight / 3 + "px";
  }

  for (var i = 0; i < getClass("nav")[0].getElementsByTagName("li").length; i++) {
    getClass("nav")[0].getElementsByTagName("li")[i].style.padding = Number((window.innerHeight / 12 - 20) / 2) + "px 16px";
  }

  getClass("menu-tab")[0].style.top = window.innerHeight / 12 + window.innerHeight / 3 + "px";

  getClass("menu-tab")[0].style.height = window.innerHeight - (window.innerHeight / 12 + window.innerHeight / 3) + "px";

  if (window.innerWidth < 900 || window.innerHeight > window.innerWidth) {
    getId("header-img").style.width = "auto";
    getId("header-img").style.bottom = "500px";
    getId("col1").style.width = "5%";
    getId("col2").style.width = "90%";
    getId("col3").style.width = "5%";

    getClass("nav")[0].style.display = "none";
    getId("nav-btn").style.display = "block";
  } else if (window.innerHeight < window.innerWidth) {
    getId("header-img").style.width = "100%";
    getId("header-img").style.bottom = "200px";
    getId("col1").style.width = "20%";
    getId("col2").style.width = "60%";
    getId("col3").style.width = "20%";

    getClass("nav")[0].style.display = "block";
    getId("nav-btn").style.display = "none";
  }
}

resize();

document.body.onresize = function() {
  resize();
};

var menuOn = false;
getId("nav-btn").onclick = function() {
  if (!menuOn) {
    menuOn = true;
    getId("nav-btn").src = "img/phone-nav-btn-close.png";
    getClass("menu-tab")[0].style.display = "block";
  } else {
    menuOn = false;
    getId("nav-btn").src = "img/phone-nav-btn.png";
    getClass("menu-tab")[0].style.display = "none";
  }
};
