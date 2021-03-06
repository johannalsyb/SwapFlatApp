import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


function MyButton({children,color,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}  style={[styles.ButtonStyle, { backgroundColor: color } ]}>
      <Text style={styles.ButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  ButtonStyle: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 15,
    width: "100%",
    maxWidth: 400,
    borderRadius: 20,
    elevation: 3,

    alignItems: "center",
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default MyButton;
