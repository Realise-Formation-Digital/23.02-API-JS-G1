import Beers from "../class/beerHandler.js";
const beers = new Beers();

const btnCreate = document.getElementById("createBtn");
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

function createBeer(){
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
    beers.createBeers(nom,tag,date,url,food,foodDeux,foodTrois,contribute,brewers,decrit);
}

btnCreate.addEventListener("click",createBeer);

