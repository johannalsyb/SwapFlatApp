import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";

function ListItems({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight 
    underlayColor= "grey"
    onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.vertical}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 15,
  },
  vertical: {
    marginTop: 10,
    marginLeft: 10,
  },
  subtitle: {
    color: "grey",
  },
});
export default ListItems;
