import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    SafeAreaView,
    Button,
    FlatList,
    TouchableHighlight,
    Alert
  } from 'react-native';

import Member from '../components/Member';
import { info_members } from '../utils/Account';
  
class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       
    }
    this.touch2GetInfo= this.touch2GetInfo.bind(this)
  }

  touch2GetInfo = (id) => {

    this.props.navigation.jumpTo("Chi tiết", {
      screen: "Detail",
      params: {ID_Component: id}
    })
    console.log(id)
  }
    
  render(){
    return (
      <SafeAreaView>
        <FlatList 
          numColumns={2}
          data={info_members}
          keyExtractor= {(item, index) => index.toString()}
          renderItem={ ({item}) => (<Member member={item} GetInfo={this.touch2GetInfo}/>)}>
          
          </FlatList>
          
      </SafeAreaView>
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

  export default Home