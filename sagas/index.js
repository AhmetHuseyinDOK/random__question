import { call, put, takeLatest,all } from 'redux-saga/effects';
import {GET_QUESTION,getQuestionStarted,getQuestionFetched} from '../redux/actionTypes';
import api from '../api';

export function* hello(){
    console.log('hello');
}

export function* getQuestion(){
    yield put(getQuestionStarted());
    var response = yield call(api.getQuestion);
    yield  put(getQuestionFetched(response.data));
}

export function* watchGetQuestion(){
   
    yield takeLatest(GET_QUESTION,getQuestion)
} 

export default function* rootSaga() {
    yield all([
      hello(),
      watchGetQuestion()
    ])
  }