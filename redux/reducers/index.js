import {
    GET_QUESTION_STARTED,
    GET_QUESTION_FETCHED,
    GET_RANDOM_QUESTION_STARTED,
    GET_RANDOM_QUESTION_FETCHED,
    GET_ALL_QUESTIONS_STARTED,
    GET_ALL_QUESTIONS_FETCHED
} from '../actionTypes';

const initialState = {
    randomQuestion : {question:"",answer:""},
    randomQuestionLoading:false,
    allQuestions: [],
    allQuestionsLoading: false,
    question: {question:"",answer:""},
    questionLoading: false
}

function randomQuestionApp(state = initialState,action){
    
    switch(action.type){
        case GET_QUESTION_STARTED:
            return {...state,loading:true};
        case GET_QUESTION_FETCHED:
            return {...state,question:action.question,loading:false};
        case GET_RANDOM_QUESTION_STARTED:
            return {...state,randomQuestionLoading:true};
        case GET_RANDOM_QUESTION_FETCHED:
            return {...state,randomQuestion:action.question,randomQuestionLoading:false}       
        case GET_ALL_QUESTIONS_STARTED:
            return {...state,allQuestionsLoading:true};
        case GET_ALL_QUESTIONS_FETCHED:
            return {...state,allQuestions:action.questions,allQuestionsLoading:false}            
    }
    return state;
}

export default randomQuestionApp;

