import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native"
import FontAweSome from "react-native-vector-icons/FontAwesome"
import Navigation from './components/Navigation';
import About from './screens/Camera';
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login';
import { createStackNavigator } from "@react-navigation/stack";
import TaiComponent from './components/InfoComponent';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      isLoading : false,
      isLoggedIn : false,
      idUser : -1,
    }
    this.checkLogin = this.checkLogin.bind(this)
    this.checkLoading = this.checkLoading.bind(this)
    this.getIDUser = this.getIDUser.bind(this)
  }

  checkLogin = (status) => {
    this.setState({
      isLoggedIn : status
    })
  }

  checkLoading = (status) => {
    this.setState({
      isLoading : status
    })
  }
  
  getIDUser = (id) => {
    this.setState({
      idUser: id
    })
  }
  render (){
    
    if (!this.state.isLoading)
      return (
        <SplashScreen CheckLoading = {this.checkLoading} />
      )
    else if(!this.state.isLoggedIn){
      return(
        <Login CheckLogin={this.checkLogin} ID_User ={this.getIDUser}/>
      );
    }
    return(
      <Navigation ID_Component={this.state.idUser} CheckLogin={this.checkLogin}/>
    );    
    
    // return(
    //   <TaiComponent ID_User = {this.state.idUser}/>
    // )
    
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
