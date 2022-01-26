import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

function ListItemsIcons(props) {
  return (
    <View style={styles.container}>
    <View style={[styles.icons,{ height: 50, width: 50, borderRadius:25, backgroundColor: props.color}]}>
      <Ionicons
        style={styles.icons}
        name={props.icon}
        size={props.size}
      />
    </View>

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
    backgroundColor: "white",
  },
  icons: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: "black",
    alignContent: "center",
    fontWeight: "bold",
  },
  vertical: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default ListItemsIcons;
