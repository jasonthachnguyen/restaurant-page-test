function initializeAboutPage(){
    const contentDiv = document.querySelector("#content");
    const title = document.createElement("h1");
    const storyParagraph = document.createElement("p");
    title.textContent = "Our Story";
    storyParagraph.textContent = `Our chef was trained within the mountains of the Himmalayas 
                                  under the excruating regimen of the oversight of the world's
                                  most reowned chefs.`;
    contentDiv.appendChild(title);
    contentDiv.appendChild(storyParagraph);
}

export default initializeAboutPage;