import { urlBeers } from "../libs/const.js"


class Beers {

    async callBeers() {
        try {
            const response = await axios.get(urlBeers);
            return response.data;
        } catch (error) {
          console.error(error);
        }
    }
}

export default Beers