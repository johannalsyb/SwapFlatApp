import React  from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Card from "./components/Card";
import MyButton from "./components/MyButton";
import colors from "./config/colors";
import ViewImageScreen from "./screens/ViewImageScreen";

import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* <ViewImageScreen></ViewImageScreen> */}
    <Card
    image={require("./assets/elephant.jpg")}
    title="My title"
    description="My description"
    ></Card>
 
   

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
