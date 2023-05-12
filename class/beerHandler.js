import { urlBeers } from "../libs/const.js"

class Beers {

    async getBeersByName($value){
        try{
            let res = await axios.get(urlBeers + '?name=' + $value);
            return res.data;
        }
        catch(e){
            console.error(e);
        }
    }
}


export default Beers