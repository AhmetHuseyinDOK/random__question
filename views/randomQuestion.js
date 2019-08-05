
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';

import Question from '../components/question';
import QuestionStatus from '../components/questionStatus';
import {connect} from 'react-redux';
import { getRandomQuestion } from '../redux/actionTypes';
class QuestionView extends React.Component{
    static navigationOptions = {
        title:"Challenge"
    }
    componentDidMount = () =>{
        this.props.getQuestion();
    }
    
    render = () => {
        const {loading,question:{question,answer}} = this.props;
        return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Question style={styles.question} question={question} answer={answer}/>
                    <QuestionStatus/>
                </View>
            </SafeAreaView>
        </Fragment>
        );
    }
     
}

const mapStateToProps = (state) => ({
    question: state.randomQuestion,
    loading: state.randomQuestionLoading
});

const mapDispatchToProps = (dispatch) => ({
    getQuestion: () => dispatch(getRandomQuestion())
})
 
const styles = StyleSheet.create({
    safeArea:{
    },
    container:{
        height:"100%"
    },
    button:{
      paddingVertical:50,
      backgroundColor:"orange"
    },
    buttonText:{
      fontSize:40,
      fontWeight: "bold"   
    },
    question:{
      flexGrow:1
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionView);

  