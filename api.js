import Axios from "axios";

const axios = new Axios.create({
    baseURL: 'http://10.0.2.2:3000/',
});

class Api {

    async getQuestion(){
        return await axios.get('/question/random');
    }

}

export default  new Api();
