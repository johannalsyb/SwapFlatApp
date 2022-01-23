import React  from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Card from "./components/Card";
import MyButton from "./components/MyButton";
import colors from "./config/colors";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <ListingDetailsScreen></ListingDetailsScreen>
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
