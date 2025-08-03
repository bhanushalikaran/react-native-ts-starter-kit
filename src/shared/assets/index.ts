import { Platform } from "react-native";

export const Icons = {
  no_image: require("./images/placeholder.jpg"),
};

export const fontFamily = {
  _font: {
    regular: Platform.select({
      ios: "",
      android: "",
    }),
    medium: Platform.select({
      ios: "",
      android: "",
    }),
    semiBold: Platform.select({
      ios: "",
      android: "",
    }),
    bold: Platform.select({
      ios: "",
      android: "",
    }),
  },
  _font2: {
    regular: Platform.select({
      ios: "",
      android: "",
    }),
    medium: Platform.select({
      ios: "",
      android: "",
    }),
    semiBold: Platform.select({
      ios: "",
      android: "",
    }),
    bold: Platform.select({
      ios: "",
      android: "",
    }),
  },
};
