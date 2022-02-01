import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    fontSize: 15,
    color: "black",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
