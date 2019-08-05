
import React from 'react';
import RandomQuestion from './views/randomQuestion';
import Question from './views/question';
import NavigationService from './NavigationService';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import OneSignal from 'react-native-onesignal';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import questionList from './views/questionList';
const sagaMiddleware = createSagaMiddleware();
const store  =  createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const MainNavigator = createStackNavigator({
    Home: {screen: RandomQuestion},
    Question: {screen: Question},
    QuestionList:{screen:questionList}
  },{
    initialRouteName:"Home",
  });


const AppContainer  = createAppContainer(MainNavigator);

class App extends React.Component{

    constructor(props){
        super(props);
        OneSignal.init("df8d6abe-2625-4f59-bfa7-ba53518af423");
        OneSignal.addEventListener('opened', this.onOpened);
      }
    
      componentWillUnmount(){
        OneSignal.removeEventListener('opened', this.onOpened);
      }
    
      onOpened = (openResult)=> {
        let id = openResult.notification.payload.additionalData.id;
        NavigationService.navigate(
                "Question",
                {
                    id:id
                }
        );
      }

    render = () => {
        return (
            <Provider store={store}>
                <AppContainer 
                ref={nav => {
                    NavigationService.setTopLevelNavigator(nav);
                }}/>
            </Provider>
        );
    }

    
}

export default App;