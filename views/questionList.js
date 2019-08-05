import React from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';
import {connect } from 'react-redux';
import {getAllQuestions} from '../redux/actionTypes';
import NavigationService from '../NavigationService';
class QuestionList extends React.Component{
    static navigationOptions = {
        title:"Tüm Sorular"
    }
    componentDidMount(){
        if(this.props.questions.length == 0){
            this.props.getQuestions();
        }
    }   

    render = () => {
        const {loading,questions} = this.props;
        return (
            <View>
                {loading?(
                    <Text>Yükleniyor...</Text>
                ):(
                    <FlatList
                        data={this.props.questions}
                        renderItem={({item})=>
                            <TouchableOpacity onPress={()=>NavigationService.navigate('Question',{id:item.id})}>
                                <Text style={{padding:10}}>{item.question}</Text>
                            </TouchableOpacity>}
                        keyExtractor={(item) => item.id.toString() }
                    />
                )}
            </View>
        )
    }

}

const mapStateToProps = ( state) => ({
    questions: state.allQuestions,
    loading: state.allQuestionsLoading
});

const mapDispatchToProps = dispatch => ({
    getQuestions: () => {dispatch(getAllQuestions());}
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionList);