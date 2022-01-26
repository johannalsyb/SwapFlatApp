import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

function ListingScreen(props) {
  return (
    <View style={styles.container}>
      <Card image={require("../assets/elephant.jpg")}
      title="Product"
      description="kdjekjd" />
      <Card image={require("../assets/elephant.jpg")}
      title="Product"
      description="kdjekjd" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "100%",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: colors.back,
  },
});
export default ListingScreen;
