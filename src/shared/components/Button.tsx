import DoublePress from "@bhanushalikaran/react-native-doublepress";
import React, { memo } from "react";
import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../../features/hooks/useTheme";

interface buttonProps {
  title: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: () => void;
}

const Button: React.FC<buttonProps> = (props) => {
  const { title, buttonStyle, titleStyle, onPress } = props;
  const { colors } = useTheme();

  return (
    <DoublePress
      style={[
        styles.button,
        buttonStyle,
        { backgroundColor: colors.button.primary.idle.background },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </DoublePress>
  );
};

const styles = StyleSheet.create({
  button: {
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
    flexShrink: 1,
  },
});

export default memo(Button);
