import { urlBeers, urlIngredients } from "../libs/const.js"

class Beers {

    rowEl;

    constructor() {
        this.rowEl = document.getElementById("rowList");
    }

    async getBeersByName($value){
        try{
            let res = await axios.get(urlBeers + '?name=' + $value);
            this.htmlConstruct(res.data);
        }
        catch(e){
            console.error(e);
        }
    }

    // affiche les bières récupérées avec le filtre donnée
    async getBeersBytype(value){
        try{
            let res = await axios.get(urlBeers + '?type=' + value)
            this.htmlConstruct(res.data)
        }
        catch(e){
            console.error(e);
        }
    }

    htmlConstruct(value){
        console.log(value)
        const rowEl = document.getElementById("rowList");
        this.removeChild(rowEl);
        for(let i of value){
            const colEl = document.createElement('div');
            colEl.classList.add('col-sm-12');
            colEl.classList.add('col-lg-4');
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
            link.classList.add('btn-info')
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

    removeChild(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}


export default Beers