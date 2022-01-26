import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

function ListItemsIcons(props) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icons} name={props.icon} size={props.size} />
      <View style={styles.vertical}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "red",
  },
  icons: {
    color: "black",
    backgroundColor: colors.primary,
    borderRadius: 50,

  },
  title: {
    fontSize: 15,
    color: "black",
    alignContent: "center",
    alignItems: "center",
  },

  vertical: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ListItemsIcons;
