import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";

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

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={dataValidation}
        >
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
        </AppForm>
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
