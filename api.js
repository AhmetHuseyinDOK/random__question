import Axios from "axios";
const axios = new Axios.create({
    baseURL: "https://random-question.herokuapp.com",
});

class Api {

    async getQuestion(){
        return await axios.get('/question/random');
    }

}

export default  new Api();
