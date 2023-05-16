import Beers from "../class/beerHandler.js";

const beers = new Beers();

// recupérer ées elements html de la navbar pour la recherche
let inputValue = document.getElementById("searchInput");
let nameButton = document.getElementById("nameBtn");
let typeButton = document.getElementById("typeBtn");

//ajouter les ecouterurs sur les différents boutons
nameButton.addEventListener("click", clickName);
typeButton.addEventListener("click", clickType);

/**
 * fonction appele au clic du bouton
 * Récupère la valeur de l'input et appel une méthode de la classe
 */
async function clickName(){
    try{
        let nameSearch = inputValue.value;
        await beers.getBeersByName(nameSearch);
    }
    catch(e){
        console.error(e);
    }
}

async function clickType(){
    try{
        let typeSearch = inputValue.value;
        await beers.getBeersByType(typeSearch);
    }
    catch(e){
        console.error(e);
    }
}


