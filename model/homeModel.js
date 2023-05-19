import Beers from "../class/beerHandler.js";


class HomeModel {

    _beerInstance
    _tabLimit = [] // Array's List
    _pageQuantity = 0

    constructor() {
        this.initPage()
    }

    async initPage() {
        try {
            this._beerInstance = new Beers();
            const beersListRaw = await this._beerInstance.callBeers();
            this._tabLimit = _.chunk(beersListRaw, 3);
            this._pageQuantity = this._tabLimit.length
            const chooseP = (numPage) => this.choosePage(numPage);
            chooseP(0)
            for (let i = 0; i < this._pageQuantity; i++) {
                let btnPage = document.createElement('button');
                btnPage.classList.add('btn');
                btnPage.classList.add('btn-primary');
                btnPage.classList.add('btnPage');
                btnPage.classList.add('mx-3');
                btnPage.classList.add('p-3');
                btnPage.id = i;
                btnPage.innerText = i + 1
                btnPage.value = i;
                btnPage.addEventListener('click', (evt) => {
                    chooseP(parseInt(evt.target.value))
                })
                document.getElementById("btnContainer").appendChild(btnPage);
            }

            // recupérer ées elements html de la navbar pour la recherche
            let inputValue = document.getElementById("searchInput");
            let typeSelect = document.getElementById("type-select");

            //ajouter les ecouterurs sur les différents éléments
            typeSelect.addEventListener("change", async (evt) => await this.changeType(evt));
            inputValue.addEventListener("input", async (evt) => await this.clickName(evt));

        } catch (e) {
            console.error(e)
        }
    }

    /**
     * 
     * @param {number} pageNumber 
     */
    choosePage(pageNumber) {
        this._beerInstance.htmlConstruct(this._tabLimit[pageNumber])
    }

    /**
     * 
     * @param {Event} evt 
     */
    async clickName(evt) {
        try {
            evt.stopPropagation()
            if (!evt.target.value || evt.target.value === '') return
            await this._beerInstance.getBeersByName(evt.target.value);
        }
        catch (e) {
            console.error('remiao', e);
        }
    }

    /**
     * 
     * @param {Event} evt 
     */
    async changeType(evt) {
        try {
            if (typeSelect.value !== "ing") {
                let typeSearch = typeSelect.value;
                await beers.getBeersByType(typeSearch);
            }
        }
        catch (e) {
            console.error(e);
        }
    }


}

export default HomeModel