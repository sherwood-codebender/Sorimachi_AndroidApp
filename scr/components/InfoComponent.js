import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    SafeAreaView,
    ScrollView, 
    Image,
    TouchableOpacity,
    Alert
  } from 'react-native';
import { info_members } from '../utils/Account';

export default class InfoComponent extends React.Component {
    constructor(props){
        super(props)
     
    }
    
   
    render(){

        
        let {ID_Component} = this.props
        // id_user != "" && (ID_Component = id_user )
        let member = info_members.find(item => item.id === ID_Component)
        

    const Driver=(props)=>{
        return(
            <View{...props}>
            <View style={styles.line}></View>
            </View>
        );
        }

    return (
       
        <ScrollView >
          <View style={styles.container}>
          
              <View style={styles.header}>
                
                  <Image style={styles.hinhnen}
                      source={{uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/262781058_336068604646050_3418301093842284585_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aGoBIX7LYrkAX_ei9N4&_nc_ht=scontent.fsgn2-3.fna&oh=03_AVJ_BMjnHkKw1NQCHtf1e0LPG3e6ngHxcBVQXn0cJiKEBw&oe=61E2CFA3"}}
                  />
              </View>  
              <Image style={styles.avatar} source={{uri: member.avatar}}/>
              
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>{member.name}</Text>
                  {/* <Text style={styles.name}>{JSON.stringify(ID_Component)}</Text>
                  <Text style={styles.name}>{JSON.stringify(id_user)}</Text> */}
                  <Text style={styles.userInfo}>{member.email}</Text>
                  <View style={styles.button_view}>
                      <TouchableOpacity style={styles.buttonContainer1}>    
                          <Text style={{fontWeight: "bold"}}>Học Viên</Text>  
                      </TouchableOpacity>              
                      <TouchableOpacity style={styles.buttonContainer2}>
                          <Text style={{fontWeight: "bold",color:'white'}}>Khóa Học: Lập Trình Mobile</Text> 
                      </TouchableOpacity>    
                  </View>
                  <Driver style={styles.deiver}> </Driver> 
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-filled/50/000000/education.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                             Học Kỹ Sư Công Nghệ Thông Tin Tại <Text style={{fontWeight: "bold" ,fontSize:16,}}>Đại Học Công Nghiệp TP.HCM</Text>
                          </Text>
                      </View>
                  </View>
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-filled/50/000000/education.png'}}/>
                      </View>                      
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                              Học Khóa Lập Trình Hệ Thống Bằng Kỹ Thuật Tiên Tiến Tại <Text style={{fontWeight: "bold" ,fontSize:16,}}>Công ty Sorimachi Việt Nam</Text>
                          </Text>
                      </View>
</View>                   
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/home.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                              Sống Tại:<Text style={{fontWeight: "bold" ,fontSize:16,}}> Thành Phố Hồ Chí Minh</Text>
                          </Text>
                      </View>
                  </View>
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/glyph-neue/64/000000/address.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                              Đến Từ: <Text style={{fontWeight: "bold" ,fontSize:16}}>{member.address}</Text> 
                          </Text>
                      </View>
                  </View>
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/glyph-neue/64/000000/birthday.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                              Ngày Sinh: <Text style={{fontWeight: "bold" ,fontSize:16,}}>{member.birth}</Text>
                          </Text>
                      </View>
                  </View>
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                              {member.instagram}
                          </Text>
                      </View>
                  </View>
                  <View style={styles.item}>
                      <View style={styles.iconContent}>
                          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/50/000000/ringing-phone.png'}}/>
                      </View>
                      < View style={styles.infoContent}>
                          <Text style={styles.description}>
                               {member.phone}
                          </Text>
                      </View>
</View>
                 
                  
                </View>
            </View>
          </View>
          </ScrollView>
        )
}
   
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0FFFF',
           
       },
       item:{
        flexDirection : 'row',
        marginLeft:10,
 
      },
      iconContent:{
        alignItems:'flex-start',    
      },
      infoContent:{
       paddingRight:5, 
       paddingLeft:10,
        alignItems:'flex-start',
        
      },
      
      icon:{
        width:27,
        height:27,
        marginTop:20,
        alignItems:'flex-start'
      },
      info:{
        fontSize:18,
        color: "black",
        marginTop:23,
        height:95,
        width:420,
        paddingLeft:10,
      },


    header:{
      backgroundColor: "#F0FFFF",
      height:200,
      width:400,   
      alignItems: 'center',
      justifyContent: 'center',
    },
    hinhnen:{
        width:390,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginLeft:10,
        marginTop:9,
        alignItems: 'center',
        justifyContent: 'center',


    },
    userInfo:{
        fontSize:12,
        color:"#778899",
        fontWeight:'600',
        
        height:45,
        marginTop:-5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 74,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:27,
      color:"black",
      fontWeight: "bold",
      height:45,
      marginTop:15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
       alignItems: 'center',
      padding:30,
    },

    description:{
      fontSize:16,
      color: "#696969",
      marginTop:12,
      height:45,
      width:320,
      flexDirection: 'row',
    },
    buttonContainer1: {
      marginTop:-7,
      height:41,
      width:120,
     justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      borderRadius:4,
      backgroundColor: "#DCDCDCCC",
      //marginLeft:-10,
      
    },
    buttonContainer2: {
        marginTop:-7,
        height:41,
        width:220,
       justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        borderRadius:4,
        backgroundColor: "#6495ED",
        marginLeft:20,
        color:'white'
        
      },
    button_view:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    line:{
        height:1.5,
        flex:1,
        backgroundColor:'#DCDCDCCC',
        marginTop:20,
        // marginBottom:30,
    },
    deiver:
    {
        flexDirection:'row',
        height:40,
        width:370,
        marginBottom:1,
    }
  });












// const TaiComponent = (props) => {
//     return (
//         <SafeAreaView
//         style={styles.body}  
//         >
//         <Text style={styles.text}>Tai's Screen</Text>
//         </SafeAreaView>
//     )
// }
    
// const styles=StyleSheet.create({
// body:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
// },

// text:{
//     fontSize: 40,
//     fontWeight: 'bold',
// }
// })
