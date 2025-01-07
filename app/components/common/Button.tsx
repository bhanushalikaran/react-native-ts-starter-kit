import DoublePress from "@bhanushalikaran/react-native-doublepress";
import React, { memo } from "react";
import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import colors from "../../theme/colors";

type buttonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: () => void;
};

const Button: React.FC<buttonProps> = (props) => {
  const { title, buttonStyle, titleStyle, onPress } = props;

  return (
    <DoublePress style={[styles.Button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </DoublePress>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 6,
  },

  text: {
    color: colors.white,
    flexShrink: 1,
  },
});

export default memo(Button);
