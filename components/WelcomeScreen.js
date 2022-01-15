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

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{
            width: 420,
            height: 600,
            alignItems: "center",
            padding: 30,
          }}
        >
          <Image
            source={require("../assets/logo-red.png")}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text>Sell What You Don't Need</Text>
         
        </ImageBackground>
       
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          height:60,
        }}
      />
       <View
        style={{
          backgroundColor: "blue",
          height:60,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
