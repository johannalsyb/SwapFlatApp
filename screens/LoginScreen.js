import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";
import { Formik } from "formik";
import MText from "../components/MText";
import * as Yup from 'yup';

const dataValidation = Yup.object().shape(
  {
    email : Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password"),
  });


function LoginScreen(props) {
  
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <Image
          style={{ width: 60, height: 60, alignSelf: "center", margin: 40 }}
          source={require("../assets/logo.png")}
        />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={dataValidation}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                autoCapitalize="none"
              />
              <MText color="red">{errors.email}</MText>
              <AppTextInput
                react-native
                info
                icon="key"
                placeholder="password"
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                secureTextEntry
              />
              <MText color="red">{errors.password}</MText>
              <MyButton
                color="black"
                onPress={handleSubmit}
              >
                LOGIN
              </MyButton>
            </>
          )}
        </Formik>
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
