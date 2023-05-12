import { urlBeers } from "../libs/const.js"
class Beers {
    //Création d'une fonction asynchrone qui va donner une
    // prommesse de contenu ou erreur de la part de l'api stocker dans l'url urlBeers
    async callBeers() {
        try {
            const response = await axios.get(urlBeers);
            return response.data;
        } catch (error) {
          console.error(error);
        }
    }









    rowEl;

    constructor() {
        this.rowEl = document.getElementById("rowList");
    }

    async getBeers(){
        try{
            let res = await axios.get(urlBeers);
            this.htmlConstruct(res.data);
        }
        catch(e){
            console.error(e);
        }
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

    htmlConstruct(value){
        const rowEl = document.getElementById("rowList");
        this.removeChild(rowEl);
        for(let i of value){
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