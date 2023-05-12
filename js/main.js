import Beers from "../class/beerHandler.js";
const beers = new Beers();

let nameValue = document.getElementById("nameBeer");
let nameButton = document.getElementById("nameBtn");

nameButton.addEventListener("click", clickButton);


async function clickButton(){
    let nameSearch = nameValue.value;
    let res = await beers.getBeersByName(nameSearch);
     const rowEl = document.getElementById("rowList");
     for(let i of res){
        console.log(i);
        const colEl = document.createElement('div');
        colEl.classList.add('col');
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        const body = document.createElement('div');
        body.classList.add("card-body");
        const heading = document.createElement('h5');
        heading.classList.add('card-title');
        const link = document.createElement('a');
        link.classList.add('btn');
        img.src = i.image_url;
        heading.innerText = i.tagline;
        link.innerText = i.name;
        link.href = i.id;
        rowEl.appendChild(colEl);
        colEl.appendChild(card);
        card.appendChild(img);
        card.appendChild(body);
        body.appendChild(heading);
        body.appendChild(link);
     }
}
