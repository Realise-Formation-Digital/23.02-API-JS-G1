import Beers from "../class/beerHandler.js";
import Ingredients from "../class/ingredientsHandler.js";
const beers = new Beers();
const ingredients = new Beers();


let inputValue = document.getElementById("searchInput");
let nameButton = document.getElementById("nameBtn");
let typeButton = document.getElementById("typeBtn");

nameButton.addEventListener("click", clickButton);
nameButton.addEventListener("click", clickButton);


async function clickButton(){
    let nameSearch = inputValue.value;
    await beers.getBeersByName(nameSearch);
}