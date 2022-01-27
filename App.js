import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, Text} from "react-native";
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



export default function App() {
  const [firstName, setFirstName] = useState("")

  return (
    <SafeAreaView style={styles.container}>
    <AppTextInput placeholder="email" icon="email"/>
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
