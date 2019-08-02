/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import Question from './views/question';
const sagaMiddleware = createSagaMiddleware();
const store  =  createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const App = () => {
  return (
    <Provider store={store}>
      <Question/>
    </Provider>
  );
};

export default App;
