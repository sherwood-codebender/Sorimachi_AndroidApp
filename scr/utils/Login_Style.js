import {StyleSheet, Dimensions} from "react-native";
const {height, width} = Dimensions.get('window')

export const Login_Style = StyleSheet.create({
    safecontainer: {
      flex : 1,
      backgroundColor : 'orange'
    },
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'orange'
    },
    text: {
      fontSize: 30,
      color: "black"
    },
    input : {
      width: width - 45,
      height: 40,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: "white",
      color: "rgba(255, 255, 255, 0.7)",
      marginHorizontal: 25,
      position: "relative"
    },

    inputIcon: {
    position: "absolute",
    top: 8, 
    left: 37
    },

    btnLogin : {
      backgroundColor: '#80FCD5',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      //textAlign: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 30,
      width: 200,
    },
    btnEye: {
      position: "absolute",
      top: 8,
      right: 37
    },

    btnLogin: {
      alignSelf: "center",
      backgroundColor: "#4632A1",
      width: 500,
      justifyContent: "center",
    },

    labelLogin: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 30,
    } 
  });