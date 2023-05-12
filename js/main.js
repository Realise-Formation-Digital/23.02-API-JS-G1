import Beers from "../class/beerHandler.js"
const beer = new Beers()
let res = await beer.getBeers()

for (let x of res) {
    
    console.log(x.name)
}





 