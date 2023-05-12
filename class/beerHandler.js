import { urlBeers } from "../libs/const.js"


class Beers {
    
    async getBeers(){
        try
        {
            //création de la constante qui va venir recupérer l'api
            const res = await axios.get(urlBeers);
            return res.data;
        }
        catch(e)
        {
            console.log(e)
        }
    }
}


export default Beers