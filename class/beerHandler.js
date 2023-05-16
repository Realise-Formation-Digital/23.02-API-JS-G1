
import { urlBeers } from "../libs/const.js";


class Beers {
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
      this.htmlConstruct(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  async getBeersByName(value) {
    try {
      let res = await axios.get(urlBeers + "?name=" + value);
      this.htmlConstruct(res.data);
    } catch (e) {
      console.error(e);
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
            let result = response.data.substr(response.data.length - 4, 4);
            this.htmlId(result);
        } catch (error) {
            console.error(error);
        }
    }

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

    removeChild(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

export default Beers;
