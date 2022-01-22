import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={{
          flexDirection: "row",
           justifyContent: "space-between",
        
      }}>
        <Ionicons style={{
            
            bottom: 80,

        }} name="close" size={35} color="white" />
        <Ionicons
        style={{
          
            bottom: 80,
        }} name="trash" size={35} color="white" />
      </View>

      <Image
        source={require("../assets/jungle.jpg")}
        style={{ height: "65%", width: "100%" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
  },
});
export default ViewImageScreen;
