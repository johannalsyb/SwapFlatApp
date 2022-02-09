import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";
import { Formik } from "formik";
import MText from "../components/MText";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const dataValidation = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
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
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppFormField
                icon="email"
                fieldName="email"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <AppFormField
                fieldName="password"
                icon="key"
                placeholder="password"
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
              />

              <SubmitButton
                title="LOGIN"
                color="black"
                style={styles.button}
              >
               
              </SubmitButton>
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
  button: {
    marginVertical: 16,
  
  },
});

export default LoginScreen;
