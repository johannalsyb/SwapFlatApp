import React, { useState } from "react";
import { TextInput, View, StyleSheet, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import style from "../config/style";
import MText from "./MText";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import ItemCategories from "./ItemCategories";

function DropDown({ icon, placeholder, items }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => (setIsVisible(true))}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.secondary}
              style={styles.icon}
            />
          )}
          <MText style={{ flex: 1 }}> {placeholder} </MText>
          <MaterialCommunityIcons
            name="arrow-down-drop-circle-outline"
            size={25}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animation="slide">
      <Button title="close" onPress={() => setIsVisible(false)}/>
      <FlatList 
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({item}) => 
          <ItemCategories 
          label={item.label}
          onPress={() => console.log("coucou")}
          /> }
      />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.back,
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
  },
  icon: {
    marginRight: 10,
  },
});

export default DropDown;
