import React from "react";
import AppPicker from "../AppPicker";
import { StyleSheet } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ItemCategories
 from "../ItemCategories";
import AppFormField from "./AppFormField";

import {
  Modal,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().max(15).required().label("Title"),
  price: Yup.number().required().max(6).label("Price"),
  description: Yup.string().required().min(10).max(120).label("Description"),
});

const categories = [
  {
    label: "Fourniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Food",
    value: 3,
  },
];

function AppFormPicker(props) {
  const [visible, setVisible] = useState(false);

  return (
    <Formik
      initialValues={{ title: " ", price: " ", description: " ", categories:{categories} }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {() => (
        <>
        <AppFormField
            fieldName= "title"
            placeholder="Title"
        />


          <TouchableWithoutFeedback onPress={() => (setVisible(true))}>
            <AppPicker
              color={{ color: "black" }}
              placeholder="category"
              icon="chevron-down"
            />
          </TouchableWithoutFeedback>
          <Modal visible={visible}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <ItemCategories
                  label={item.label}
                 
                />
              )}
            />
          </Modal>
        </>
      )}
    </Formik>
  );
}

export default AppFormPicker;
