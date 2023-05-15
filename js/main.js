import Beers from "../class/beerHandler.js";
import Ingredients from "../class/ingredientsHandler.js"
const beers = new Beers();
const ingredients = new Ingredients();


let inputValue = document.getElementById("searchInput");
let nameButton = document.getElementById("nameBtn");
let typeButton = document.getElementById("typeBtn");

nameButton.addEventListener("click", clickBeer);
typeButton.addEventListener("click", clickIng);


async function clickBeer(){
    let nameSearch = inputValue.value;
    await beers.getBeersByName(nameSearch);
}

async function clickIng(){
    let typeSearch = inputValue.value;
    await beers.getBeersByType(typeSearch);
}