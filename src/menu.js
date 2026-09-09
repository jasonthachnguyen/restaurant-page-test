import lasangaImg from "./lasagna.jpg";

function initializeMenuPage(){
    const contentDiv = document.querySelector("#content"); 
    const title = document.createElement("h1");
    const foodTitle = document.createElement("h2");
    const foodDesc = document.createElement("p");
    const foodImg = document.createElement("img");
    
    title.textContent = "Menu";
    foodTitle.textContent = "Lasagna";
    foodDesc.textContent = "This food is awesome!";
    foodImg.src = lasangaImg;
    
    contentDiv.appendChild(title);
    contentDiv.appendChild(foodTitle);
    contentDiv.appendChild(foodDesc);
    contentDiv.appendChild(foodImg);
}

export default initializeMenuPage;