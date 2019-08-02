import React,{Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import Button from './button';
import {connect} from 'react-redux';
class Question extends Component{

    state = {
        showAnswer:false
    }

    toggle = ( ) => {
        this.setState({showAnswer:!this.state.showAnswer});
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.question != prevProps.question){
            this.setState({showAnswer:false});
        }
    }

    render = () => {
        let {showAnswer} = this.state;
        let {question,answer,style} = this.props;
        return (
            <View style={{...styles.container,...style}}>
                <View style={styles.textContainer} >
                    <Text style={{fontWeight:"bold",fontSize:30}}>{showAnswer?"Cevap":"Soru"}</Text>
                    <ScrollView >
                        <Text style={styles.text}>{showAnswer?answer:question}</Text>
                    </ScrollView>
                </View>
                <Button style={styles.button} onPress={this.toggle}>{showAnswer?"Soruya Dön":"Cevabı Göster"}</Button>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{   
        backgroundColor:"#EFEFEF"//"#F4F4F4"
    },
    textContainer:{
        flex:1,
        padding:30,
    },
    button:{
        padding:30
    }
})

const mapStateToProps = state => ({
    loading:state.loading
})

module.exports = Question;