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

export default function SecondScreen() {
  return (
    <View style={styles.container}>
        <Text>SECOND SCREEN</Text>

    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "green",
  },
});
