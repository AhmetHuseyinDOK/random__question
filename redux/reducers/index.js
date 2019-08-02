import {GET_QUESTION_STARTED,GET_QUESTION_FETCHED} from '../actionTypes';

const initialState = {
    question : {question:"",answer:""},
    loading:false
}

function randomQuestionApp(state = initialState,action){
    
    switch(action.type){
        case GET_QUESTION_STARTED:
            return {...state,loading:true};
        case GET_QUESTION_FETCHED:
            return {...state,question:action.question,loading:false}    
    }
    return state;
}

export default randomQuestionApp;

