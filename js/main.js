import Beers from "../class/beerHandler.js"
//instance of object Beers
const beer = new Beers();
//await for response to obtain from Beers JSON from DB
let res = await beer.callBeers();
console.log(res);
 //link to html with id
 const colEl = document.getElementById('row-list');
 //loop array res
 for (let beer of res){
    //create a div element
     const divElement = document.createElement('div')
     //injection of HTML card
     colEl.innerHTML =
     `<div class="card" style="width: 18rem;">
     <img src="${beer.image_url}" class="card-img-top">
     <div class="card-body">
       <h5 class="card-title">${beer.name}</h5>
       <p class="card-text">${beer.description}</p>
     </div>
   </div>` 

   colElement.classList.add('col');
   
 }

 document.getElementById("demo").innerHTML = text;