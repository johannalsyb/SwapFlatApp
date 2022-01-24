import React from "react";
import { View, StyleSheet } from "react-native";

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    flexDirection:'row',
    width: "100%",
    justifyContent: "center",
    height: 1,
    backgroundColor: "grey",
    opacity: 0.2,

   
  },
});
