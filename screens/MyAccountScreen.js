import React from "react";
import ListItems from "../components/ListItems";
import colors from "../config/colors";
import { View, StyleSheet, ImageBackground } from "react-native";
import ListItemsIcons from "../components/ListItemsIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MyAccountScreen(props) {
  return (
    <ImageBackground style={{ backgroundColor: "#F7F2F1", flex: 1 }}>
      <View style={styles.container}>
        <ListItems
          title="Johann"
          subTitle="Johann.alerte@gmail.com"
          image={require("../assets/johann.jpg")}
        />
      </View>
   <ListItemsIcons style={styles.icoins}
       title= "My Listing"
       icon= "list-outline"
       size= {40}  
   />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: "white",
    marginVertical: 20,
  },
  icoins: {
   backgroundColor: "blue",
  }
});

export default MyAccountScreen;
