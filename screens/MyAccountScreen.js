import React from "react";
import ListItems from "../components/ListItems";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, ImageBackground } from "react-native";


function MyAccountScreen(props) {
  return (
     
    <ImageBackground style={{backgroundColor: "#F7F2F1" , flex: 1,}}>
         <View style={styles.container}>
      <ListItems
        title="Johann"
        subTitle="Johann.alerte@gmail.com"
        image={require("../assets/johann.jpg")}
      />
    </View>  
    </ImageBackground>
      
     
    
  );
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: "white",
        marginVertical: 20,
    }
})

export default MyAccountScreen;
