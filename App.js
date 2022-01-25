import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Card from "./components/Card";
import MyButton from "./components/MyButton";
import colors from "./config/colors";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessageScreen from "./screens/MessageScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import "react-native-gesture-handler";

import WelcomeScreen from "./screens/WelcomeScreen";
import MyAccountScreen from "./screens/MyAccountScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <MyAccountScreen></MyAccountScreen>
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
