import React from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  View,
  ImageBackground,
} from "react-native";
import SecondScreen from "./components/SecondScreen";
import WelcomeScreen from "./components/WelcomeScreen";

{/* <WelcomeScren/> */}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <SecondScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
