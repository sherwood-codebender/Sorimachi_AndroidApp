import React from 'react';
import InfoComponent from "../components/InfoComponent"


import {
    StyleSheet,
    View,
    Text,
    Pressable,
    SafeAreaView
  } from 'react-native';

class Detail extends React.Component{

    constructor(props){
        super(props)
        this.state={
        }
      }


    render(){
        
        const {ID_Component} = this.props.route.params
    
        return (
           
              //<Text style={styles.text}>{JSON.stringify(ID_Component)}</Text>  
             <InfoComponent ID_Component = {ID_Component} />
           
        )
    }
}

const styles=StyleSheet.create({
body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},

text:{
    fontSize: 40,
    fontWeight: 'bold',
}
})

export default Detail