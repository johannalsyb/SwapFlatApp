import React from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Text, Platform } from "react-native";
import MText from "./MText";

function ItemCategories({ label, onPress }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  
  text: {
      color: "black",
      fontSize: 15,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      marginHorizontal: 20,
      marginVertical: 4,
  }
});

export default ItemCategories;
