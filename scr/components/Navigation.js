import React, {Component} from "react";

// Navigation components

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {Text, Dimensions,  Alert, Button, Image, StyleSheet, View} from 'react-native'
import FontAweSome5 from "react-native-vector-icons/FontAwesome5"

//Import screens

import Home from "../screens/Home";
import CameraScreen from "../screens/Camera";
import Detail from "../screens/Detail";
import {info_members} from '../utils/Account'

const fullScreenWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const CameraStack = createStackNavigator();

var ID_User;

function ActionBarIcon() {
    let user = info_members.find(member => (member.id === ID_User))
    return (
        
        <View style={{alignItems: "center"}}>
            <Image
                source={{uri : user.avatar}}
                style={{ width: 40, height: 40, borderRadius: 40/2, marginRight : 15 }} />
            <Text style={{fontSize: 10, fontWeight: "bold", marginRight: 15}}>{user.name.split(" ").pop()}</Text>
        </View>
      );
  }

class HomeStackScreen extends React.Component {
    render(){
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "orange",
                },
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}>
            <HomeStack.Screen name='Home' component={Home}  options={{ title: 'DANH SÁCH THÀNH VIÊN', headerRight: (props) => <ActionBarIcon {...props} />}}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
    }
}

class DetailStackScreen extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        
        const {ID_Component} = this.props.route.params

        return (
            
            <DetailStack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "orange",
                },
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            //     headerBackground: () => {<View style={styles.leftComponentStyle}>
            //     <Text style={{fontSize: 50}}>dsafdsf </Text>
            //   </View>}
            }}>
                <DetailStack.Screen name='Detail' component= {Detail}  initialParams={{ID_Component: ID_Component}}  
                options={{ 
                    headerTitle: 'THÔNG TIN CHI TIẾT',
                    headerRight: (props) => <ActionBarIcon {...props} />}}>

                </DetailStack.Screen>
            </DetailStack.Navigator>
        )
    }
    
}

class CameraStackScreen extends React.Component {
    render(){
    return (
        <CameraStack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: "orange",
            },
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <CameraStack.Screen name='Camera' component={CameraScreen} options={{ 
                   
                    headerRight: (props) => <ActionBarIcon {...props} />}}></CameraStack.Screen>
        </CameraStack.Navigator>
    )
    }
}


const Tab = createBottomTabNavigator();

export default class Navigation extends React.Component {
    
    constructor(props){
        super(props)

    }

    render(){
        let number_member = info_members.length
        ID_User = this.props.ID_Component
        // let {id_user} = this.props.route.params
        return(
            <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "Chi tiết"
                
                screenOptions={({ route }) => ({
                    tabBarOptions : {
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                        showLabel: false,
                        style: {backgroundColor: "orange",},
                      },
                    tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Thành viên"){
                    //   filePath = require("../assets/Lottie/82488-team-members-meetup.json");
                        iconName = 'users';
                        size = focused ? 20 : 30;
                        color = focused ? "blue" : "#555"
                        
                    } else if (route.name === "Chi tiết") {
                    //   filePath = require("../assets/Lottie/57946-profile-user-card.json");
                        iconName = 'id-card';  
                        size = focused ? 20 : 30;
                        color = focused ? "blue" : "#555"
                    }
                    else if (route.name === "Máy ảnh") {
                    //   filePath = require("../assets/Lottie/75746-about-us.json");
                        iconName = 'camera';      
                        size = focused ? 20 : 30;
                        color = focused ? "blue" : "#555"
                    
                    }

                    else if (route.name === "Đăng xuất") {
                        //   filePath = require("../assets/Lottie/75746-about-us.json");
                            iconName = 'sign-out-alt';      
                            size = focused ? 20 : 30;
                            color = focused ? "blue" : "#555"
                        
                        }
                    
                    return(
                        // <LottieView source={filePath} autoPlay={focused} loop />
                        <FontAweSome5 name={iconName} size={size} color={color}/>
                    )
                    
                },
              
              tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: 'bold'
              },  
    
              headerShown: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "orange"
              },
              headerTintColor: "#ffffff",
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            
         
            
            })
        
        }
           
            >
               
                <Tab.Screen name="Thành viên" component={ HomeStackScreen} options={{tabBarBadge : number_member}}/>
                {/* <Tab.Screen name="Chi tiết" children= {() => <Detail ID_Component = {this.props.ID_Component} />} /> */}
                <Tab.Screen name="Chi tiết" component= {DetailStackScreen}  initialParams={{ID_Component: this.props.ID_Component}}/>
                <Tab.Screen name="Máy ảnh" 
                    component={CameraStackScreen} 
                    options={{ unmountOnBlur: true }}
                    listeners={({ navigation }) => ({
                        blur: () => navigation.setParams({ screen: undefined }),
                      })}
                />
                <Tab.Screen name="Đăng xuất"
                    component={Home} //Component useless
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                    
                            return Alert.alert(  
                                'Xác nhận đăng xuất'
                                ,'Bạn có muốn đăng xuất ?'
                                ,[
                                  {text: 'Đồng ý', onPress: () => {this.props.CheckLogin(false)}},
                                  {text: 'Hủy bỏ'}
                                 ]
                            );
                            
                        },
                    })}
                ></Tab.Screen>
            </Tab.Navigator>
            </NavigationContainer>
        )
    }
    }
    
const styles = StyleSheet.create({
    leftComponentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})

