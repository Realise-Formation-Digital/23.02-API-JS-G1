import Beers from "../class/beerHandler.js";
import Ingredients from "../class/ingredientsHandler.js";
const beers = new Beers();
const ingredients = new Ingredients();

const btnCreate = document.getElementById("createBtn");
const selectIng = document.getElementById("idIng");
const btnAddIng = document.getElementById("addIng");

let ingredientList = await ingredients.getIngredients();

for (let ingredient of ingredientList) {
    const opt = document.createElement("option");
    opt.value = ingredient.id;
    opt.text = ingredient.name_ing;
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

    if(!!nom && !!tag && !!date && !!url && !!food && !!foodDeux && !!foodTrois && !!contribute && !!brewers && !!decrit ){
        await beers.createBeers(nom,tag,date,url,food,foodDeux,foodTrois,contribute,brewers,decrit);
    }else {
        beers.htmlId("Please, fill all the information entries");
    }
}

let idBeer = document.getElementById('idBeer');

function addIngBeer() {
    let beer = idBeer.value;
    let ing = selectIng.options[selectIng.selectedIndex].value;
    beers.addIngToBeer(beer, ing);
}


btnCreate.addEventListener("click",createBeer);
btnAddIng.addEventListener("click", addIngBeer);
