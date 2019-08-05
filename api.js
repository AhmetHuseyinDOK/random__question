import Axios from "axios";
const axios = new Axios.create({
    baseURL: "https://random-question.herokuapp.com"//"http://10.0.2.2:3000" ,
});

class Api {

    async getRandomQuestion(){
        return await axios.get('/question/random');
    }

    async getQuestion(id){
        return await axios.get('/question/'+id);
    }

    async getAllQuestions(){
        return await axios.get('/question');
    }

}

export default  new Api();
