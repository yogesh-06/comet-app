import { View, Text, Image } from "react-native";
import { assets, FONTS, SIZES } from "../constants";

export default function Logo() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 0,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: SIZES.large,
          color: "black",
          marginTop: 5,
        }}
      >
        Hi Yogesh,
      </Text>
    </View>
  );
}
