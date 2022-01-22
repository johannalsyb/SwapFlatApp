import React, { Children } from "react";
import { Pressable, StyleSheet, Text, SafeAreaView, View } from "react-native";

import colors from "../config/colors";

function MyButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    
      <Pressable style={[styles.ButtonStyle,{backgroundColor:props.color}]} onPress={onPress}>
        <Text style={styles.ButtonText}>{props.children}</Text>
      </Pressable>
    
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
