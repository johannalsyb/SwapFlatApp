import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";

import colors from "../config/colors";

function Card(props) {
  return (
    <SafeAreaView>
      <View style={styles.backgroudView}>
        <Image
          style={{
            height: 300,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={props.image}
        />
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.descriptionStyle}>{props.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroudView: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    height: 400,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  titleStyle: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 15,
    paddingTop: 10,
    color: "black",
  },
  descriptionStyle: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 15,
    paddingTop: 15,
    color: colors.secondary,
    fontWeight: "bold",
  },
  horizontal: {
    flexDirection: "row",
    backgroundColor: "pink",
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  vertical: {
    flexDirection: "column",
    position: "absolute",
    right: 20,
  },
});
export default Card;
