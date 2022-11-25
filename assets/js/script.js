'use strict'


/**
 * add event on multiple elements
 */

 const addEventOnElements = function (elem, type, callback) {
    for (let i = 0, len = elem.length; i < len; i++) {
      elem[i].addEventListener(type, callback);
    }
  }
  


/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    this.document.body.classList.add("loaded");
});


/**
 * Mobile Navbar Toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);

/**
 * HEADER
 */

// HEADER WILL BE ACTIVE AFTER SCROLL 100PX OF WINDOW

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200 ? header.classList.add("active")
  : header.classList.remove("active");
}

window.addEventListener("scroll", headerActive);