import blackChefCat from "./black-chef-cat.jpg";
export function initalizePage(){
    const contentDiv = document.querySelector("#content");
    const restaurantTitle = document.createElement("h1");
    const restaurantHeadline = document.createElement("h2");
    const chefImage = document.createElement("img");
    const chefDescription = document.createElement("p");
    chefImage.src = blackChefCat;
    restaurantTitle.textContent = "L'atelier alla Sfingi";
    restaurantHeadline.textContent = "The world's best restaurant ever!";
    chefDescription.textContent = "A picture of our most esteemed chef...";
    contentDiv.appendChild(restaurantTitle);
    contentDiv.appendChild(restaurantHeadline);
    contentDiv.appendChild(chefImage);
    contentDiv.appendChild(chefDescription);
}