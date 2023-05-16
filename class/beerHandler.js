
import { urlBeers } from "../libs/const.js";


class Beers {

    //elément html pour construire
  rowEl;
  constructor() {
    this.rowEl = document.getElementById("rowList");
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
      throw new ERROR;
    }
  }

    async getBeersByType(value){
        try{
            let res = await axios.get(urlBeers + '?type=' + value);
            this.htmlConstruct(res.data);
        }
        catch(e){
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
    async createBeers(name,tagline,first_brewed,image_url,food_pairing,food_pairingDeux,food_pairingTrois,contributed_by,brewers_tips,description){
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
            console.log(response.data);
            let result = response.data.substr(response.data.length - 4, 4);
            this.htmlId(result);
        } catch (error) {
            throw new ERROR;
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

    async updateBeers(id, name,tagline,first_brewed,image_url,food_pairing,food_pairingDeux,food_pairingTrois,contributed_by,brewers_tips,description){
        try {
            // METTRE A JOUR LES DONNÉES
            console.log(id)
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
            this.htmlId("Beer succesfully updated");
        } catch (error) {
            this.htmlId("This id does not exist in our database, please create the item first");
            console.error(error);
        }
    }

    /**
     * permettant de contruire le html sur une liste d'objet
     * @param {liste d'objet} value 
     */
    htmlConstruct(value){
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
            link.classList.add('btn-info');
            img.src = i.image_url;
            heading.innerText = i.tagline;
            link.innerText = i.name;
            link.href = '#'+i.id;
            rowEl.appendChild(colEl);
            colEl.appendChild(card);
            card.appendChild(img);
            card.appendChild(body);
            body.appendChild(heading);
            body.appendChild(link);
        }
    }


    /**
     * fonction construisant un html sur une string ou objet
     * @param {objet unique ou string} value 
     */
    htmlId(value) {
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
    removeChild(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

export default Beers;
