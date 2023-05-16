import Beers from "../class/beerHandler.js";

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
    btnPage.innerText = i
    btnPage.value = i;
    btnPage.addEventListener('click', (evt) => {
        choosPage(parseInt(evt.target.value))
    })
    document.getElementById("btnContainer").appendChild(btnPage);
  }
