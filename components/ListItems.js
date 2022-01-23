import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ListItems({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.vertical}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    
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
      color: "grey"
  }
});
export default ListItems;
