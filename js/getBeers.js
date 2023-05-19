import Beers from "../class/beerHandler.js";
//initialisation
const beers = new Beers();


//await state - response to obtain JSON beer from DB
// await beers.callBeers();
//stock résultat dans res
let res = await beers.callBeers();

// création d'un tableau de limit de donnée
let tabLimit = '';
//utilisation d'une méthode Lodash pour couper la liste d'objets
tabLimit = _.chunk(res,3);
let page = tabLimit.length;

/**
 * nombre de la page
 * @param {int} value 
 */
function choosPage(value){
    beers.htmlConstruct(tabLimit[value])
}
//au chargement la première page 
choosPage(0);

//boucler et créer les boutons et appeler la fonction
for (let i = 0; i < page; i++) {
    let btnPage = document.createElement('button');
    btnPage.classList.add('btn');
    btnPage.classList.add('btn-primary');
    btnPage.classList.add('btnPage');
    btnPage.classList.add('mx-3');
    btnPage.classList.add('p-3');
    btnPage.id = i;
    btnPage.innerText = i + 1
    btnPage.value = i;
    btnPage.addEventListener('click', (evt) => {
        choosPage(parseInt(evt.target.value))
    })
    document.getElementById("btnContainer").appendChild(btnPage);
  }

/**
 * fonction appele au clic du bouton
 * Récupère la valeur de l'input et appel une méthode de la classe
 */
async function clickName(evt){
    try{
        evt.stopPropagation()

        if(!evt.target.value || evt.target.value === '') {
            return choosPage(0);
        }
        else{
            await beers.getBeersByName(evt.target.value);
        }
    }
    catch(e){
        throw new Error("erreur");
    }
}

// recupérer ées elements html de la navbar pour la recherche
let inputValue = document.getElementById("searchInput");
let typeSelect = document.getElementById("type-select");

//ajouter les ecouterurs sur les différents éléments
typeSelect.addEventListener("change", changeType);
inputValue.addEventListener("input",async (evt) => await clickName(evt));



/**
 * fonction appele au select
 * Récupère la valeur du select et appel une méthode de la classe
 */
async function changeType(){
    try{
        if(typeSelect.value !== "ing"){
            let typeSearch = typeSelect.value;
            await beers.getBeersByType(typeSearch);
        }
    }
    catch(e){
        console.error(e);
    }
}