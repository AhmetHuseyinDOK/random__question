import { call, put, takeLatest,all } from 'redux-saga/effects';
import {
    GET_QUESTION,
    getQuestionStarted,
    getQuestionFetched,
    GET_RANDOM_QUESTION,
    getRandomQuestionStarted,
    getRandomQuestionFetched
} from '../redux/actionTypes';

import api from '../api';

export function* hello(){
    console.log('hello');
}

export function* getQuestion(action){
    yield put(getQuestionStarted());
    var response = yield call(() => api.getQuestion(action.id));
    yield  put(getQuestionFetched(response.data));
}

export function* watchGetQuestion(){
    yield takeLatest(GET_QUESTION,getQuestion)
} 

export function* getRandomQuestion(){
    yield put(getRandomQuestionStarted());
    var response = yield call(api.getRandomQuestion);
    yield  put(getRandomQuestionFetched(response.data));
}


export function* watchGetRandomQuestion(){
   
    yield takeLatest(GET_RANDOM_QUESTION,getRandomQuestion)
} 

export default function* rootSaga() {
    yield all([
      hello(),
      watchGetQuestion(),
      watchGetRandomQuestion()
    ])
  }