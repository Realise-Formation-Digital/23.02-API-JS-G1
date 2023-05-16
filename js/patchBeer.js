import Beers from "../class/beerHandler.js";
const beers = new Beers();

let selectedBeer = 0

let beerList =  await beers.callBeers()

const selectBeer = document.getElementById("beer-select");
for (let beer of beerList) {
    const opt = document.createElement("option");
    opt.value = beer.id;
    opt.text = beer.name;
    selectBeer.appendChild(opt);
}

const updateBut = document.getElementById("updateBtn");


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

// MET A JOUR LES DONNEES
async function updateBeers(id){
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

    if(selectBeer.value !== "Select beer to edit"){
        if(!!id && !!nom && !!tag && !!date && !!url && !!food && !!foodDeux && !!foodTrois && !!contribute && !!brewers && !!decrit ){
            await beers.updateBeers(id, nom,tag,date,url,food,foodDeux,foodTrois,contribute,brewers,decrit);
        }else {
            beers.htmlId("Please, fill all the information entries");
        }
    }else {
        beers.htmlId("Please, select a beer first");
    }
}

function slctBeer(){
    // UPDATE THE PLACEHOLDERS WITH THE PREVIOUS INFO OF THE SELECTED BEER
    if(selectBeer.value !== "Select beer to edit"){
        const beer = beerList.find(element => element.id === parseInt(selectBeer.value))
        name.placeholder = beer.name;
        tagline.placeholder = beer.tagline;
        firstBrewed.placeholder = beer.first_brewed;
        urlImage.placeholder = beer.image_url;
        foodPairing.placeholder = beer.food_pairing;
        foodPairingDeux.placeholder = beer.food_pairing2;
        foodPairingTrois.placeholder = beer.food_pairing3;
        contributedBy.placeholder = beer.contributed_by;
        description.placeholder = beer.description;
        brewersTips.placeholder = beer.brewers_tips;

        //OUTPUTS THE ID OF OUR SELECTED BEER
        selectedBeer = beer.id
    }
}

updateBut.addEventListener("click",()=> updateBeers(selectedBeer));
selectBeer.addEventListener("change",()=> slctBeer());
