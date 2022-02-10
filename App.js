import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Switch,
  Image,
  View,
  ImageBackground,
} from "react-native";
import Card from "./components/Card";
import MyButton from "./components/MyButton";
import colors from "./config/colors";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessageScreen from "./screens/MessageScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import "react-native-gesture-handler";

import WelcomeScreen from "./screens/WelcomeScreen";
import MyAccountScreen from "./screens/MyAccountScreen";
import ListingScreen from "./screens/ListingScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import DropDown from "./components/DropDown";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AppFormPicker from "./components/forms/AppFormPicker";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
     <AppFormPicker></AppFormPicker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
 
});
