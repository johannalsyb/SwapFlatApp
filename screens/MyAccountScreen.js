import React from "react";
import ListItems from "../components/ListItems";
import colors from "../config/colors";
import { View, StyleSheet, ImageBackground } from "react-native";
import ListItemsIcons from "../components/ListItemsIcons";
import ItemSeparator from "../components/ItemSeparator";

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
      <ListItemsIcons
        color={colors.primary}
        style={styles.icoins}
        title="My Listing"
        icon="list-outline"
        size={40}
      />
      <ItemSeparator />
      <ListItemsIcons
        color={colors.secondary}
        title="My Messages"
        icon="caret-up-outline"
        size={40}
      />
      <View style={{marginTop: 50}}>
      <ListItemsIcons
        color={colors.pink}
        title="LOGOUT"
        icon="log-out"
        size={40}
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
  },
});

export default MyAccountScreen;
