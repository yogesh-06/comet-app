import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { RectButton } from "./Button";

export const PriceInRuppe = ({ price }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 900,
          fontSize: SIZES.large,
          color: COLORS.secondary,
        }}
      >
        ₹ {price} /-
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const ProductTitle = ({ title }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 900,
          fontSize: SIZES.extraLarge,
          color: COLORS.dark,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export const ProductInfo = ({ data }) => {
  const { name, price } = data;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -35,
        marginBottom: 10,
        paddingHorizontal: SIZES.font,
      }}
    >
      <View>
        <ProductTitle title={name} />
        <PriceInRuppe price={price} />
      </View>
      <View>
        <RectButton />
      </View>
    </View>
  );
};
