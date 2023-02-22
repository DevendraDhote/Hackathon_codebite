let navbar = document.querySelector(".header .navbar");
let preloader = document.querySelector(".loader");  
let all = document.querySelector("#smooth-wrapper");
let lod = document.querySelector(".lod");


// preloader.style.display = "initial"

// all.style.opacity ="0.1"

// setTimeout(() => {
//   all.style.opacity ="1"
//   preloader.style.display = "none"
//   lod.style.display = "none"

// }, 1500);

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

consoleText(["BUY", "SELL", "RENT"], "text", ["#41C34E", "#41C34E", "#41C34E"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});


gsap.registerPlugin(ScrollTrigger);


gsap.from(".category .heading",{
    x:200,
    duration:1,
    ScrollTrigger:{
        trigger:".category .heading",
        markers:true
    }
})


var tractor = document.querySelector(".carousel-wrapper .item-1");

// setTimeout(() => {
  gsap.from("header .navbar a,.search_bar, .icons", {
    duration: 2.5,
    scale: 0.8,
    opacity: 0,
    delay: 0.2,
    ease: "elastic",
    force3D: true,
  });
  
  let tl = gsap.timeline();
  
  tl.from(document.querySelector("#head1"), {
    opacity: 0,
    x: 600,
    duration: 0.4,
  });
  
  // (document).ready(function() {
  //   $(".fancy_title").lettering();
  // });
  
  tl.from(document.querySelector("#head2"), {
    opacity: 0,
    x: -100,
    duration: 0.3,
  });
  tl.from(document.querySelector("#head3"), {
    opacity: 0,
    x: -200,
    duration: 0.3,
  });
  tl.from(document.querySelector(".explore_btn"), {
    opacity: 0,
    y: 100,
    duration: 0.3,
  });

// },1200);

var tl2 = gsap.timeline({
  ScrollTrigger: {
      trigger : document.querySelector("#smooth-content"),
      start : "top 50%",
      markers : true,
  }
});

tl2
.from('#smooth-content .category .heading', {
  y : 50,
  opacity : 0,
  ease : Expo.easeInOut,
  duration : 0.5
})
.from('#main2 p', {
  y : 50,
  opacity : 0,
  ease : Expo.easeInOut,
})