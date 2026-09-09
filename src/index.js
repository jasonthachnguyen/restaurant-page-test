import initializeHomepage from "./homepage.js";
import initializeMenuPage from "./menu.js";
import initializeAboutPage from "./about.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

initializeHomepage();

homeButton.addEventListener("click", () => {
    clearContentDiv(); 
    initializeHomepage();
});

menuButton.addEventListener("click", () => {
    clearContentDiv();
    initializeMenuPage();
});

aboutButton.addEventListener("click", () => {
    clearContentDiv(); 
    initializeAboutPage();
});

function clearContentDiv(){
    contentDiv.innerHTML = "";
}
