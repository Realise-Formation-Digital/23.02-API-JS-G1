import Beers from "../class/beerHandler.js";
const beers = new Beers();

let nameValue = document.getElementById("nameBeer");
let nameButton = document.getElementById("nameBtn");

nameButton.addEventListener("click", clickButton);


async function clickButton(){
    let nameSearch = nameValue.value;
    await beers.getBeersByName(nameSearch);
}