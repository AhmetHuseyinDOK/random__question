import React from 'react';
import {View,StyleSheet} from 'react-native';
import Button from './button';
import {connect} from 'react-redux';
import {getQuestion} from '../redux/actionTypes';
function QuestionStatus(props){
    
    const onPress = () => {
        props.getQuestion();
    };

    return (
        <View style={styles.container}>
            <Button onPress={onPress} style={{...styles.button,...styles.dontknow}}>BİLMİYORUM</Button>
            <Button onPress={onPress} style={{...styles.button,...styles.know}}>BİLİYORUM</Button>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    button:{
        flexGrow:1,
        padding:30,
    },
    know:{
        backgroundColor:"green"
    },
    dontknow:{
        backgroundColor:"red"
    }
});



const mapDispatchToProps = (dispatch) => ({
    getQuestion: ()=>dispatch(getQuestion())
});

export default connect(null,mapDispatchToProps)(QuestionStatus);