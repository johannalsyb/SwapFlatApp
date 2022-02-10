import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";
import style from '../config/style';

function MText({ children, color }) {
  return <Text style={[style.text, styles.text, {color: color}]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    flex: 1,
  
  },
});

export default MText;
