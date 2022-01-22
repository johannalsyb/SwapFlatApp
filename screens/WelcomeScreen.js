import React from "react";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import MText from "../components/MText";

import MyButton from "../components/MyButton";


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require("../assets/background.jpg")}
    >
      <Image
        resizeMode="contain"
        style={{
          height: 300,
          width: 300,
          alignItems: "flex-start",
          position: "absolute",
          bottom: 200,
        }}
        source={require("../assets/logo.png")}
      />
      <MText> Create the first sanctuary</MText>

    
      <MyButton color={colors.primary}>LOGIN</MyButton>
      <MyButton color={colors.secondary}>REGISTER</MyButton>

    </ImageBackground>
  
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",   
    padding:20,
    
  
  },
});

export default WelcomeScreen;
