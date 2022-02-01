import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import MyButton from '../components/MyButton';
import colors from '../config/colors';


function LoginScreen(props) {
    const [state, setState] = useState("")

    return (
        <ImageBackground style={styles.background}>
        <Image 
        style={{width: 60, height: 60, alignSelf: "center", margin: 40}}
        source={require("../assets/logo.png")}/>
      <AppTextInput 
           icon="email" 
           placeholder= "Email"
           keyboardType= "email-address"
           onChangetext={text => setState(text)}
           autoCapitalize= "none"
           />
            <AppTextInput 
           icon="key" 
           placeholder= "password"
           keyboardType= "default"
           autoCapitalize= "none"
           secureTextEntry
           />
  <MyButton color= "black">LOGIN</MyButton>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        width: "100%", 
        height: "100%",
    }
})

export default LoginScreen;