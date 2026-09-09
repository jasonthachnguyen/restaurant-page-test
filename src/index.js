import initializeHomepage from "./homepage.js";
import initializeAboutPage from "./about.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const aboutButton = document.querySelector("#about-btn");

initializeHomepage();

homeButton.addEventListener("click", () => {
    clearContentDiv(); 
    initializeHomepage();
})

aboutButton.addEventListener("click", () => {
    clearContentDiv(); 
    initializeAboutPage();
})
function clearContentDiv(){
    contentDiv.innerHTML = "";
}
