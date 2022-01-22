import React  from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Card from "./components/Card";
import ViewImageScreen from "./screens/ViewImageScreen";

import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ViewImageScreen></ViewImageScreen>
    
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
