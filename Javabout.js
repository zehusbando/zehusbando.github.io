const body = document.body;

const triggerMenu = document.querySelector(".page-header .trigger-menu");

triggerMenu.addEventListener("click", () => {

  body.classList.toggle("menu-open");

});

body = document.body;

const nav = document.querySelector(".page-header nav");

const menu = document.querySelector(".page-header .menu");

const lottiePlayer = document.querySelector("lottie-player");

const scrollUp = "scroll-up";

const scrollDown = "scroll-down";

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {

    body.classList.remove(scrollUp);

    return;

  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {

    // down

    body.classList.remove(scrollUp);

    body.classList.add(scrollDown);

    lottiePlayer.play();

  } else if (

    currentScroll < lastScroll &&

    body.classList.contains(scrollDown)

  ) {

    // up

    body.classList.remove(scrollDown);

    body.classList.add(scrollUp);

    lottiePlayer.stop();

  }

  lastScroll = currentScroll;

});
body = document.body;

triggerMenu = document.querySelector(".page-header .trigger-menu");

const lottieWrapper = document.querySelector(".lottie-wrapper");

lottiePlayer = lottieWrapper.querySelector("lottie-player");

lottieWrapper.addEventListener("click", (e) => {

  e.preventDefault();

  triggerMenu.click();

  body.classList.toggle("menu-open-with-lottie");

});
