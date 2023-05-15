import { urlIngredients } from "../libs/const.js"

class Ingredients {
    async getIngredients() {
        try {
            let res = await axios.get(urlIngredients);
            return (res.data);
        } catch (e) {
            console.error(e);
        }
    }
   
}


export default Ingredients