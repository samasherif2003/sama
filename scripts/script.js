var width = width || document.documentElement.clientWidth || document.body.clientWidth;
// https://stackoverflow.com/questions/9410088/how-do-i-get-innerwidth-in-internet-explorer-8

var height = height || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
// https://stackoverflow.com/questions/5864467/internet-explorer-innerheight

// FUNCTIONS
function getId(name) {
  return document.getElementById(name);
}

function getClass(name) {
  return document.getElementsByClassName(name);
}

function getTag(name) {
  return document.getElementsByTagName(name);
}

// slice out any string containing a number ending with "px" or "em"
function slicePX(element) {
  return Number(element.slice(0, element.length - 2));
}

// RESPONSIVE STUFF
function resize() {
  getId("header").style.height = height / 3 + "px"; // .header height
  getId("blog-title").style.top = height / 12 + "px"; // #blog-title top
  getId("blog-title").style.fontSize = ((72 / 225.3) * height / 3) + "px"; // #blog-title font-size
  getId("blog-subtitle").style.fontSize = ((16 / 225.3) * height / 3) + "px"; // #blog-subtitle font-size
  getId("blog-subtitle").style.top = height / 12 + ((72 / 225.3) * height / 3 + ((16 / 225.3) * height / 3) / 2) + "px"; // #blog-subtitle top
  for (var i = 0; i < getClass("topic").length; i++) {
    getClass("topic")[i].getElementsByTagName("p")[0].style.bottom = (10 / 300) * height + "px";
    getClass("topic")[i].getElementsByTagName("p")[0].style.fontSize = ((32 / 1378) * width) + "px";
  }

  for (var i = 0; i < getClass("tab").length; i++) {
    getClass("tab")[i].style.height = height / 12 + "px";
    getClass("tab")[i].style.top = height / 3 + "px";
  }

  for (var i = 0; i < getClass("nav")[0].getElementsByTagName("li").length; i++) {
    if (i !== 3) {
      getClass("nav")[0].getElementsByTagName("li")[i].style.padding = Number((height / 12 - 20) / 2) + "px 16px";
    }
  }

  getId("search").style.paddingTop = (14 / 1378) * height + "px";
  getId("search").style.height = (52 / 768) * height + "px";
  getId("search-bar").style.marginTop = (30 / 1378) * height + "px";
  getId("search-bar").style.height = (27 / 768) * height + "px";

  for (var i = 0; i < getClass("topic").length; i++) {
    getClass("topic")[i].style.height = height / 2 + "px";
  }

  getId("filler").style.height = height / 3 + height / 12 + "px";

  getClass("menu-tab")[0].style.top = height / 12 + height / 3 + "px";

  getClass("menu-tab")[0].style.height = height - (height / 12 + height / 3) + "px";

  if (width < 900 || height > width) {
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
  } else if (height < width) {
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

// scroll trick
document.body.onscroll = function() {
  var y = document.body.scrollTop;
  if (y >= height / 2) {
    getId("header").style.display = "none";
    getId("filler").style.display = "none";
    for (var i = 0; i < getClass("tab").length; i++) {
      getClass("tab")[i].style.top = "0px";
    }
  } else if (y >= 0 && y < height / 12) {
    getId("header").style.display = "block";
    getId("filler").style.display = "block";
    for (var i = 0; i < getClass("tab").length; i++) {
      getClass("tab")[i].style.height = height / 12 + "px";
      getClass("tab")[i].style.top = height / 3 + "px";
    }
  }
};

// hover ons
if (getClass("topic").length !== 0) {
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
}

// toggle button for navbar on phone
var menuOn = false;
getClass("nav-btn")[0].addEventListener("click", function() {
  if (!menuOn) {
    menuOn = true;
    getClass("nav-btn")[0].src = "img/phone-nav-btn-close.png";
    getClass("menu-tab")[0].style.display = "block";
  } else {
    menuOn = false;
    getClass("nav-btn")[0].src = "img/phone-nav-btn.png";
    getClass("menu-tab")[0].style.display = "none";
  }
});

// toggle button for search button
var searchOn = false;
getId("search").addEventListener("click", function() {
  if (!searchOn) {
    searchOn = true;
    getId("search-bar").style.display = "block";
    var width = 0;
    var interval = setInterval(function() {
      if (slicePX(getId("search-bar").style.width) > 240) {
        clearInterval(interval);
      } else {
        width++;
        getId("search-bar").style.width = width + slicePX(getId("search-bar").style.width) + "px";
      }
    }, 1);
  } else {
    searchOn = false;
    getId("search-bar").style.display = "none";
    getId("search-bar").style.width = "50px";
  }
});
