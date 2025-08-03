import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../../../app/navigation/navigation.types";

const Screen1 = ({}: ScreenProps<"Screen1">) => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Screen1);
