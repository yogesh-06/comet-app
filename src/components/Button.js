import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, radious, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        right: 0,
        backgroundColor: COLORS.white,
        borderRadius: radious ? radious : 50,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#337CCF",
        borderRadius: SIZES.base,
        minWidth: minWidth,
        padding: SIZES.small,
        justifyContent: "center",
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Add to cart
      </Text>
    </TouchableOpacity>
  );
};
