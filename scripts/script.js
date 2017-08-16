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
  for (var i = 0; i < getClass("topic").length; i++) {
    getClass("topic")[i].getElementsByTagName("p")[0].style.bottom = (10 / 300) * window.innerHeight + "px";
    getClass("topic")[i].getElementsByTagName("p")[0].style.fontSize = ((32 / 1378) * window.innerWidth) + "px";
  }

  for (var i = 0; i < getClass("tab").length; i++) {
    getClass("tab")[i].style.height = window.innerHeight / 12 + "px";
    getClass("tab")[i].style.top = window.innerHeight / 3 + "px";
  }

  for (var i = 0; i < getClass("nav")[0].getElementsByTagName("li").length; i++) {
    getClass("nav")[0].getElementsByTagName("li")[i].style.padding = Number((window.innerHeight / 12 - 22) / 2) + "px 16px";
  }

  for (var i = 0; i < getClass("topic").length; i++) {
    getClass("topic")[i].style.height = window.innerHeight / 2 + "px";
  }

  getId("filler").style.height = window.innerHeight / 3 + window.innerHeight / 12 + "px";

  getClass("menu-tab")[0].style.top = window.innerHeight / 12 + window.innerHeight / 3 + "px";

  getClass("menu-tab")[0].style.height = window.innerHeight - (window.innerHeight / 12 + window.innerHeight / 3) + "px";

  if (window.innerWidth < 900 || window.innerHeight > window.innerWidth) {
    getId("header-img").style.width = "auto";
    getId("header-img").style.bottom = "500px";
    getClass("tab")[1].style.left = "5%";
    getClass("tab")[2].style.left = "95%";
    getClass("tab")[0].style.width = "5%";
    getClass("tab")[1].style.width = "90%";
    getClass("tab")[2].style.width = "5%";
    getId("col1").style.width = "5%";
    getId("col2").style.width = "90%";
    getId("col3").style.width = "5%";

    getClass("nav")[0].style.display = "none";
    getClass("nav-btn")[0].style.display = "block";
  } else if (window.innerHeight < window.innerWidth) {
    getId("header-img").style.width = "100%";
    getId("header-img").style.bottom = "200px";
    getClass("tab")[1].style.left = "20%";
    getClass("tab")[2].style.left = "80%";
    getClass("tab")[0].style.width = "20%";
    getClass("tab")[1].style.width = "60%";
    getClass("tab")[2].style.width = "20%";
    getId("col1").style.width = "20%";
    getId("col2").style.width = "60%";
    getId("col3").style.width = "20%";

    getClass("nav")[0].style.display = "block";
    getClass("nav-btn")[0].style.display = "none";
  }
}

resize();

document.body.onresize = function() {
  resize();
};

document.body.onscroll = function() {
  var y = document.body.scrollTop;
  if (y >= window.innerHeight / 2) {
    getId("header").style.display = "none";
    getId("filler").style.display = "none";
    for (var i = 0; i < getClass("tab").length; i++) {
      getClass("tab")[i].style.top = "0px";
    }
  } else if (y >= 0 && y < window.innerHeight / 12) {
    getId("header").style.display = "block";
    getId("filler").style.display = "block";
    for (var i = 0; i < getClass("tab").length; i++) {
      getClass("tab")[i].style.height = window.innerHeight / 12 + "px";
      getClass("tab")[i].style.top = window.innerHeight / 3 + "px";
    }
  }
}

getClass("topic")[0].addEventListener("mouseover", function() {
  getClass("description")[0].style = "display: block;";
});
getClass("topic")[0].addEventListener("mouseout", function() {
  getClass("description")[0].style = "display: none;";
});
getClass("topic")[1].addEventListener("mouseover", function() {
  getClass("description")[1].style = "display: block;";
});
getClass("topic")[1].addEventListener("mouseout", function() {
  getClass("description")[1].style = "display: none;";
});
getClass("topic")[2].addEventListener("mouseover", function() {
  getClass("description")[2].style = "display: block;";
});
getClass("topic")[2].addEventListener("mouseout", function() {
  getClass("description")[2].style = "display: none;";
});

var menuOn = false;
getClass("nav-btn")[0].onclick = function() {
  console.log("Clicked!");
  if (!menuOn) {
    menuOn = true;
    getClass("nav-btn")[0].src = "img/phone-nav-btn-close.png";
    getClass("menu-tab")[0].style.display = "block";
  } else {
    menuOn = false;
    getClass("nav-btn")[0].src = "img/phone-nav-btn.png";
    getClass("menu-tab")[0].style.display = "none";
  }
};