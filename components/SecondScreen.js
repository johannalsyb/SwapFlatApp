import React from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  View,
  ImageBackground,
} from "react-native";
import colors from "../config/colors";

export default function SecondScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.flex}>
        <View
          style={{
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
          }}
        />
        <View
          style={{
            backgroundColor: colors.secondary,
            height: 50,
            width: 50,
          }}
        />
      </View>
      
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 40,
  },
  background: {
    backgroundColor: "black",
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
