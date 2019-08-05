export const GET_QUESTION ="GET_QUESTION";
export const GET_QUESTION_STARTED = "GET_QUESTION_STARTED";
export const GET_QUESTION_FETCHED = "GET_QUESTION_FETCHED";

export function getQuestion(id){
    return {
        type: GET_QUESTION,
        id:id
    }
}

export function getQuestionStarted(){
    return {
        type: GET_QUESTION_STARTED
    }
}

export function getQuestionFetched(question){
    return {
        type: GET_QUESTION_FETCHED,
        question:question
    }
}

export const GET_RANDOM_QUESTION ="GET_RANDOM_QUESTION";
export const GET_RANDOM_QUESTION_STARTED = "GET_RANDOM_QUESTION_STARTED";
export const GET_RANDOM_QUESTION_FETCHED = "GET_RANDOM_QUESTION_FETCHED";

export function getRandomQuestion(){
    return {
        type: GET_RANDOM_QUESTION
    }
}

export function getRandomQuestionStarted(){
    return {
        type: GET_RANDOM_QUESTION_STARTED
    }
}

export function getRandomQuestionFetched(question){
    return {
        type: GET_RANDOM_QUESTION_FETCHED,
        question:question
    }
}

export const GET_ALL_QUESTIONS ="GET_ALL_QUESTIONS";
export const GET_ALL_QUESTIONS_STARTED = "GET_ALL_QUESTIONS_STARTED";
export const GET_ALL_QUESTIONS_FETCHED = "GET_ALL_QUESTIONS_FETCHED";

export function getAllQuestions(){
    return {
        type: GET_ALL_QUESTIONS
    }
}

export function getAllQuestionsStarted(){
    return {
        type: GET_ALL_QUESTIONS_STARTED
    }
}

export function getAllQuestionsFetched(questions){
    return {
        type: GET_ALL_QUESTIONS_FETCHED,
        questions:questions
    }
}