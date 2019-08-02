import React,{Component} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
module.exports = (props) => {

    const {style = {},textStyle ={},onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={{...styles.button,...style}}>
            <Text style={{...textStyle,...styles.text}}>{props.children}</Text>
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    button:{    
        padding:10,
        backgroundColor:"#0375B4",
        alignItems:"center"     
    },
    text:{
        color:"white",
        textTransform:"uppercase"
    }
})

