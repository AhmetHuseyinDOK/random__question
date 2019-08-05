
import React from 'react';
import RandomQuestion from './views/randomQuestion';
import Question from './views/question';

import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import OneSignal from 'react-native-onesignal';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
const sagaMiddleware = createSagaMiddleware();
const store  =  createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const MainNavigator = createStackNavigator({
    Home: {screen: RandomQuestion},
    Question: {screen: Question},
  },{
    initialRouteName:"Home"
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
        this.navigator.dispatch(
            NavigationActions.navigate({
                routeName:"Question",
                params:{
                    id:id
                }
            })
        );
      }

    render = () => {
        return (
            <Provider store={store}>
                <AppContainer 
                ref={nav => {
                    this.navigator = nav;
                }}/>
            </Provider>
        );
    }

    
}

export default App;