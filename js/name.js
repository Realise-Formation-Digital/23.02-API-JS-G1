import Beers from "../class/beerHandler.js";
const beers = new Beers();

beers.getBeers();

let nameValue = document.getElementById("nameBeer");
let nameButton = document.getElementById("nameBtn");

nameButton.addEventListener("click", clickButton);


async function clickButton(){
    let nameSearch = nameValue.value;
    await beers.getBeersByName(nameSearch);
}