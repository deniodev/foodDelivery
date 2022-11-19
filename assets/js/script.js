'use strict'


/**
 * add event on multiple elements
 */

const addEventOnElements = function (elem, type, callback) {
    for (let i=0; len = elem.length; i < len; i++) {
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
})

