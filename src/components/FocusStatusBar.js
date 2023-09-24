import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

import { Text } from "react-native";

export const FocusStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;

  // return <Text>FocusStatusBar</Text>;
};
