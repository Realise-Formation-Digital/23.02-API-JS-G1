import { urlIngredients } from "../libs/const.js"

class Ingredients {
   rowEl;

    constructor() {
        this.rowEl = document.getElementById("rowList");
    }

    async getBeersBytype($value){
        try{
            let res = await axios.get(urlIngredients + '?type=' + $value);
            this.htmlConstruct(res.data);
            console.log(res.data)

        }
        catch(e){
            console.error(e);
        }
    }

    htmlConstruct(value){
        const rowEl = document.getElementById("rowList");
        this.removeChild(rowEl);
        for(let i of value){
         
            const colEl = document.createElement('div');
            colEl.classList.add('col');
            const card = document.createElement('div');
            card.classList.add('card');
            const body = document.createElement('div');
            body.classList.add("card-body");
            const heading = document.createElement('h5');
            heading.classList.add('card-title');
            heading.classList.add('text-dark');
            const link = document.createElement('a');
            link.classList.add('btn');
            link.classList.add('btn-info')
            heading.innerText = i.name_ing;
            console.log(heading.innerText)
            // heading.innerText = i.type;
            link.href = `get/?id=${i.id}`;

            rowEl.appendChild(colEl);
            colEl.appendChild(card);
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


export default Ingredients