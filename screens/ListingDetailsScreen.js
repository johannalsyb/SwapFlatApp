import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import ListItems from "../components/ListItems";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Card
        image={require("../assets/elephant.jpg")}
        title="My title"
        description="My description"
      ></Card>

      <View style={styles.container}>
        <ListItems
          image={require("../assets/johann.jpg")}
          title="Johann Alerte"
          subTitle="6 listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
});

export default ListingDetailsScreen;
