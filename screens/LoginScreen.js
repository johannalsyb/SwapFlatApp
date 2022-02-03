import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";

import { useState } from "react";
import { Formik } from "formik";

function LoginScreen(props) {
  const [mail, setEmail] = useState();
  const [password, setPassword] = useState();
 
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <Image
          style={{ width: 60, height: 60, alignSelf: "center", margin: 40 }}
          source={require("../assets/logo.png")}
        />


        <Formik
        initialValues={{email: "",password: "" }}
        onSubmit={value => {
          
        }}
        >

        </Formik>

        <AppTextInput
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text) }
          autoCapitalize="none"
        />
        <AppTextInput react-native info
          icon="key"
          placeholder="password"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(text)=> setPassword(text)}
          secureTextEntry
        />
        <MyButton color="black" onPress={()=> console.log(mail, password)}>
          LOGIN
        </MyButton>



      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  container: {
    margin: 10,
  },
});

export default LoginScreen;
