import Beers from "../class/beerHandler.js"
const beer = new Beers;
let res = await beer.callBeers();
console.log(res);
 //link to html with id
 const ul = document.getElementById("allBeers");
 //read response.data
 const colEl = document.getElementById('row-list');
 for (let beer of res){
     const divElement = document.createElement('div')
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