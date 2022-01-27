import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

function MText({ children }) {
  return (<Text style={[style.text, styles.text]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
    textTransform: "capitalize",
   
    position: "absolute",
    top: 80,

 
  },
});

export default MText;
