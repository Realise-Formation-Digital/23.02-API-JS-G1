import Beers from "../class/beerHandler.js";
import Ingredients from "../class/ingredientsHandler.js";
const beers = new Beers();
const ingredients = new Ingredients();

const btnCreate = document.getElementById("createBtn");
const selectIng = document.getElementById("idIng");
const btnAddIng = document.getElementById("addIng");

let res = await ingredients.getIngredients();

for (let i of res) {
    const opt = document.createElement("option");
    opt.value = i.id;
    opt.text = i.name_ing;
    selectIng.appendChild(opt);
}



let name = document.getElementById('name');
let tagline = document.getElementById('tagline');
let firstBrewed = document.getElementById('firstBrewed');
let urlImage = document.getElementById('image_url');
let foodPairing = document.getElementById('foodPairing');
let foodPairingDeux = document.getElementById('foodPairingDeux');
let foodPairingTrois = document.getElementById('foodPairingTrois');
let contributedBy = document.getElementById('contributedBy');
let description = document.getElementById('description');
let brewersTips = document.getElementById('brewers');

async function createBeer(){
    let nom = name.value;
    let tag = tagline.value;
    let date = firstBrewed.value;
    let url = urlImage.value;
    let food = foodPairing.value;
    let foodDeux = foodPairingDeux.value;
    let foodTrois = foodPairingTrois.value;
    let contribute = contributedBy.value;
    let decrit = description.value;
    let brewers = brewersTips.value;
    await beers.createBeers(nom,tag,date,url,food,foodDeux,foodTrois,contribute,brewers,decrit);
}

let idBeer = document.getElementById('idBeer');

function addIngBeer() {
    let beer = idBeer.value;
    let ing = selectIng.options[selectIng.selectedIndex].value;
    console.log(beer, ing);
    beers.addIngToBeer(beer, ing);
}


btnCreate.addEventListener("click",createBeer);
btnAddIng.addEventListener("click", addIngBeer);
