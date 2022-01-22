import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function MyButton(props, onPress) {
  const { onPress, title = "Save" } = props;
  return (
    
      <TouchableOpacity style={[styles.ButtonStyle,{backgroundColor:props.color}]} onPress={onPress}>
        <Text style={styles.ButtonText}>{props.children}</Text>
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    marginBottom: 10,
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    width:"100%",
    maxWidth: 400,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.primary,
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
