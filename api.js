import Axios from "axios";
const axios = new Axios.create({
    baseURL: "http://10.0.2.2:3000" //"https://random-question.herokuapp.com",
});

class Api {

    async getRandomQuestion(){
        return await axios.get('/question/random');
    }

    async getQuestion(id){
        return await axios.get('/question/'+id);
    }

}

export default  new Api();
