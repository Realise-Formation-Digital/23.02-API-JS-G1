
import { urlBeers } from "../libs/const.js";


class Beers {

    //elément html pour construire
    rowEl;
    modal;
    constructor() {
        this.rowEl = document.getElementById("rowList");
        this.modal = document.getElementById('modalParent');
    }

    //asynchrone function with promise
    //calls beers from DB (urlBeers)
    async callBeers() {
        try {
            //waiting state response from axios
            const response = await axios.get(urlBeers);
            //return response = complete list data "données"
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

  /**
   * methode qui fait une requete à la db
   * @param {input de la navbar} value 
   */
  async getBeersByName(value) {
    try {
      let res = await axios.get(urlBeers + "?name=" + value);
      this.htmlConstruct(res.data);
    } catch (e) {
      throw new Error;
    }
}

    /**
     * 
     * @returns une bière
     */

    async callOneBeer(id) {
        try {
            //waiting state response from axios
            const response = await axios.get(urlBeers + '/' + id);
            //return response = complete list data "données"
            return response.data[0];
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * methode qui fait une requete à la db
     * @param {input de la navbar} value 
     */
    async getBeersByName(value) {
        try {
            let res = await axios.get(urlBeers + "?name=" + value);
            this.htmlConstruct(res.data);
        } catch (e) {
            throw new ERROR;
        }
    }

    async getBeersByType(value) {
        try {
            let res = await axios.get(urlBeers + '?type=' + value);
            this.htmlConstruct(res.data);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * Méthode permettant de récupérer les données pour créer une bière
     * @param {string} name 
     * @param {string} tagline 
     * @param {string} first_brewed 
     * @param {string} image_url 
     * @param {string} food_pairing 
     * @param {string} food_pairingDeux 
     * @param {string} food_pairingTrois 
     * @param {string} contributed_by 
     * @param {string} brewers_tips 
     * @param {string} description 
     */
    async createBeers(name, tagline, first_brewed, image_url, food_pairing, food_pairingDeux, food_pairingTrois, contributed_by, brewers_tips, description) {
        try {
            const response = await axios.post(urlBeers, {
                "name": name,
                "tagline": tagline,
                "first_brewed": first_brewed,
                "image_url": image_url,
                "contributed_by": contributed_by,
                "food_pairing": [
                    food_pairing,
                    food_pairingDeux,
                    food_pairingTrois
                ],
                "brewers_tips": brewers_tips,
                "description": description
            });
            let result = response.data.substr(response.data.length - 4, 4);
            this.htmlAlert("Beer successfully created")
            return result;
        } catch (error) {
            throw new Error;
        }
    }


    /**
     * fonction récupérant les id de bière et ingrédient
     * pour finaliser la bière
     * @param {int} idBeer 
     * @param {int} idIng 
     */
    async addIngToBeer(idBeer, idIng) {
        try {
            const response = await axios.post(urlBeers + '/' + idBeer + '/ingredients/' + idIng);
            this.htmlConstruct(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async updateBeers(id, name, tagline, first_brewed, image_url, food_pairing, food_pairingDeux, food_pairingTrois, contributed_by, brewers_tips, description) {
        try {
            // METTRE A JOUR LES DONNÉES
            console.log(id)
            console.log('i', image_url);
            console.log('D', description);
            console.log('C', contributed_by);
            const response = await axios.put(urlBeers + '/' + id, {
                "name": name,
                "tagline": tagline,
                "first_brewed": first_brewed,
                "image_url": image_url,
                "contributed_by": contributed_by,
                "food_pairing": [
                    food_pairing,
                    food_pairingDeux,
                    food_pairingTrois
                ],
                "brewers_tips": brewers_tips,
                "description": description
            });
            console.log(response.data);
            this.htmlAlert("Beer succesfully updated");
        } catch (error) {
            this.htmlAlert("This id does not exist in our database, please create the item first");
            console.error(error);
        }
    }

    /**
     * fonction pour supprimer une bière
     */

    async deleteBeer(idBeer){
        try{
            //wait for api, format : urlBeers, idBeer
            let res = await axios.delete(urlBeers + '/' + idBeer);
            //message de l'api (PHP), bière a bien été supprimée. 
            this.htmlAlert(res.data['message']);
        }
        catch(e){
            this.htmlAlert("This id does not exist in our database, please create the item first");
            console.error(error);
        }
    }

    /**
     * permettant de contruire le html sur une liste d'objet
     * @param {liste d'objet} value 
     */
    htmlConstruct(value) {
        const rowEl = document.getElementById("rowList");
        this.removeChild(rowEl);
        for (let i of value) {
            //create div with : columns
            const colEl = document.createElement('div');
            colEl.classList.add('col-sm-12');
            colEl.classList.add('col-lg-4');
            //create div with : card 
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('shadow-lg');
            //create img in card
            const img = document.createElement('img');
            img.classList.add('card-img-top');
            //create div with : card body
            const body = document.createElement('div');
            body.classList.add("card-body");
            const heading = document.createElement('h5');
            heading.classList.add('card-title');
            //create Button on card
            const link = document.createElement('button');
            link.classList.add('btn');
            link.classList.add('btn-info');
            //on click : link to htmlModal
            link.addEventListener("click", (evt) => {
                this.htmlModal(i.id);
            })
            // loops through data 
            img.src = i.image_url;
            heading.innerText = i.tagline;
            link.innerText = i.name;
            //append elements to row and columns 
            rowEl.appendChild(colEl);
            colEl.appendChild(card);
            card.appendChild(img);
            card.appendChild(body);
            body.appendChild(heading);
            body.appendChild(link);
        }
    }

    //async function for Modal (by id)
   async htmlModal(id) {
        console.log(id);
        //async - call beer by id
        let beer = await this.callOneBeer(id);
        console.log(beer);
        //display grid of modal
        this.modal.style.display = "grid";
        this.removeChild(this.modal);
        //create button close
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('btn');
        closeBtn.classList.add('btnClose');
        closeBtn.innerText = 'X';
        //inject js in html 
        this.modal.innerHTML =
            `<div class="image">
            <img src="${beer.image_url}" alt="">
        </div>
        <div class="infoBeer">
            <h2>${beer.name}</h2>
            <p class="tag">${beer.tagline}</p>
            <p class="description">${beer.description}</p>
            <p class="date">${beer.first_brewed}</p>
            <p class="contributed">${beer.contributed_by}</p>
        </div>
        <div class="ing">
            <ul>
            ${beer.ingredients
                .map(
                    (ingredient) =>
                        `<li>type: ${ingredient.type}</li>
                  <li>name: ${ingredient.name}</li>`
                )
                .join("")}
            </ul>
        </div>
        <div class="food">
            <ul>
            <li>${beer.food_pairing}</li>
            <li>${beer.food_pairing2}</li>
            <li>${beer.food_pairingTrois}</li>
            </ul>
        </div>
        <div class="tips">
            <p>${beer.brewers_tips}</p>
        </div>`;
        this.modal.appendChild(closeBtn);
        closeBtn.addEventListener("click", (evt) => {
            this.modal.style.display = "none";
        })
    }


    /**
     * fonction construisant un html sur une string ou objet
     * @param {objet unique ou string} value 
     */
    htmlAlert(value) {
        const rowEl = document.getElementById("rowList");
        this.removeChild(rowEl);
        const colEl = document.createElement('div');
        colEl.classList.add('alert');
        colEl.classList.add('alert-info');
        colEl.classList.add('text-center');
        colEl.role = "alert";
        colEl.innerHTML = value;
        rowEl.appendChild(colEl);
    }


    /**
     * fonction permettant d'enlever les elt html en lui donnant l'elt parent
     * @param {element html} parent 
     */
    removeChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

export default Beers;
