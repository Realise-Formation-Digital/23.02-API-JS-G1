import Beers from "../class/beerHandler.js";
import Ingredients from "../class/ingredientsHandler.js"
//instance of object Beers
const beers = new Beers();
const ingredients = new Ingredients();

//await state - response to obtain JSON beer from DB
await beers.callBeers();
let inputValue = document.getElementById("searchInput");
let nameButton = document.getElementById("nameBtn");
let typeButton = document.getElementById("typeBtn");

nameButton.addEventListener("click", clickName);
typeButton.addEventListener("click", clickType);


async function clickName(){
    let nameSearch = inputValue.value;
    await beers.getBeersByName(nameSearch);
}

async function clickType(){
    let typeSearch = inputValue.value;
    await ingredients.getBeersBytype(typeSearch);
}
