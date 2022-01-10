import React, {useState, Component} from "react";
import { View, StyleSheet, Animated} from "react-native";
import LottieView from "lottie-react-native";
// const {height, width} = Dimensions.get('window')
// const sourceWidth = 3200 // the width of the animation
// const sourceHeight = 3200 // the height of the animation

class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return (
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={[ 
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            },
            this.props.style,
          ]}
        />
      );
    }
  }


export default class SplashScreen extends React.Component{
    
    constructor(props){
        super(props)
      }

    render ()
    {
        return(
            <View style={styles.container}>
                {/* <LottieView source={require("../../assets/Lottie/57946-profile-user-card.json")} autoPlay={true} loop={false} 
                onAnimationFinish= {() => (
                    this.props.navigation.replace("Login")
                )}
                style={{width: width, height: width * sourceHeight / sourceWidth, marginTop:20}}
                /> */}
                
                <ImageLoader
                    style={styles.image}
                    source={require("../../assets/image/sorimachi.jpg")}
                />
                
                <LottieView source={require("../../assets/Lottie/9308-welcome-screen-animation.json")} 
                onAnimationFinish= {() => (
                    this.props.CheckLoading(true)
                )}
                autoPlay={true} 
                loop={false} 
                style={{width: 200, height: 200, marginTop:50}}/>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fefefe"
    },
    image: {
        width: 300,
        height: 70,
        borderRadius: 0,
    },
})