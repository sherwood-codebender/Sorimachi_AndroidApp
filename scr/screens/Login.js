import React from "react";
import {Alert ,View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity, Platform, Button, KeyboardAvoidingView} from "react-native";
import LottieView from "lottie-react-native"
import SplashScreen from "./SplashScreen";
import FontAweSome5 from "react-native-vector-icons/FontAwesome5"   

// import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { Login_Style } from "../utils/Login_Style";
import {info_members} from "../utils/Account"
const {height, width} = Dimensions.get('window')


export default class Login extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            press: false,
            securePass: true,
            userName: "tai",
            passWord: "tai",
            isLoggedin : false,
        
        }
        this.showPassHandler = this.showPassHandler.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
        this.handlerChangeInput = this.handlerChangeInput.bind(this)
      }


      
    showPassHandler(){
        this.setState({
            press: !this.state.press,
            securePass: !this.state.securePass
        })
    }

    handlerChangeInput(name, value){
        name === "userName" ? 
        this.setState({userName : value})
        : this.setState({passWord : value})
    }

    loginHandler()  {
        if (this.state.userName.length == 0) {
            Alert.alert("Warning!", "Vui lòng nhập tên")
        }
        else if (this.state.passWord.length == 0){
            Alert.alert("Warning!", "Vui lòng nhập mật khẩu")
        }
        else {
            let Found = false
            for (let member of info_members) {
                if (member.username == this.state.userName && member.pass == this.state.passWord){
                    this.props.CheckLogin(true)
                    this.props.ID_User(member.id)
                    Found = true
                    break
                }   
            }

            !Found && Alert.alert("Warning!", "Tên tài khoản hoặc mật khẩu không đúng")
        }
    }

    render ()
    {
        return(
       
        <KeyboardAvoidingView style={Login_Style.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            
            
            <LottieView source={require("../../assets/Lottie/50124-user-profile.json")}
            style={{width: 300, height: 300}}
            autoPlay={true} loop
            
            />
            <View><Text style={Login_Style.labelLogin}>ĐĂNG NHẬP</Text></View>
            <View style={{marginTop: 10}}> 
                <TextInput 
                    style={Login_Style.input}
                    placeholder={'Username'}
                    color={'black'}
                    value={this.state.userName}
                    onChangeText={(text) => this.handlerChangeInput("userName", text)}
                ></TextInput>
                <FontAweSome5 name={"user-circle"} size={25} style={Login_Style.inputIcon} solid={true}/>
            </View>

            <View style={{marginTop: 10}}>    

                <TextInput 
                        style={Login_Style.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.securePass}
                        value={this.state.passWord}
                        onChangeText={(text) => this.handlerChangeInput("passWord", text)}
                        color={'black'}
                ></TextInput>

                <FontAweSome5 name={"key"} size={23} style={Login_Style.inputIcon}/>
                
                <TouchableOpacity 
                    style={Login_Style.btnEye}
                    onPress={this.showPassHandler}
                >
                    <FontAweSome5 name={this.state.press ? "eye" : "eye-slash"} size={20} solid={true}/>
                </TouchableOpacity>   
            </View>

            <View style={[{ width: "40%", margin: 20 }]}>
                <Button
                    onPress={this.loginHandler}
                    title="LOGIN"
                    color="#4632A1"
                />
            </View> 

        </KeyboardAvoidingView>
       
       
        )
    }
}

