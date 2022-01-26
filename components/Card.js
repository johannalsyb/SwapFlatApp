import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";

import colors from "../config/colors";

function Card(props) {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={{
            height: 150,
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={props.image}
        />
        <View style={styles.backgroudView}>
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Text style={styles.descriptionStyle}>{props.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroudView: {
    backgroundColor: "white",
    width: "100%",
    height: 100,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 20,
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
