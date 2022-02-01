import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";
import style from '../config/style';

function MText({ children }) {
  return <Text style={[style.text, styles.text]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    textTransform: "capitalize",
    flex: 1,
   
  },
});

export default MText;
