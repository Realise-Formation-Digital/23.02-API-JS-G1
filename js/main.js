import Beers from "../class/beerHandler.js";

const beers = new Beers();

//await state - response to obtain JSON beer from DB
await beers.callBeers(1);

let inputValue = document.getElementById("searchInput");
let nameButton = document.getElementById("nameBtn");
let typeButton = document.getElementById("typeBtn");
let pageBtn = document.querySelectorAll(".btnPage");

nameButton.addEventListener("click", clickName);
typeButton.addEventListener("click", clickType);

for (let i = 0; i < pageBtn.length; i++) {
    let element = pageBtn[i];
    element.addEventListener("click",()=>choosePage(element.value));
    }


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

async function choosePage(value){
    try{
        let res = await beers.callBeers(value);
        return res;
    }
    catch(e){
        console.error(e);
    }
}

