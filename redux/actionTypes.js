export const GET_QUESTION ="GET_QUESTION";
export const GET_QUESTION_STARTED = "GET_QUESTION_STARTED";
export const GET_QUESTION_FETCHED = "GET_QUESTION_FETCHED";

export function getQuestion(){
    return {
        type: GET_QUESTION
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