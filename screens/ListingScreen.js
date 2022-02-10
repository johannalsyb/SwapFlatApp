import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import colors from "../config/colors";


const cardList = [
  {
    id: 1,
    title: "Product 1",
    description: "Le premier produit",
    image: require("../assets/elephant.jpg"),
  },
  {
    id: 2,
    title: "Product 2",
    description: "Le deuxieme produit",
    image: require("../assets/elephant.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardList}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.back,
  },
});
export default ListingScreen;
