"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-button");
  const menuPage = document.querySelector(".menu-page");
  const overlay = document.querySelector(".overlay");

  menuBtn.addEventListener("click", () => {
    menuPage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    menuPage.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    menuPage.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      menuPage.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
});
