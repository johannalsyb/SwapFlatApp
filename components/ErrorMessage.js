import React from "react";

import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error }) {
  if (!error) return null;
  return <Text style={styles.error}>{error}</Text>;
}
const styles = StyleSheet.create({
  error: {
    color: "red",
    paddingTop: 2,
  },
});
export default ErrorMessage;
