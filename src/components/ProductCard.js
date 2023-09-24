import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { ProductInfo } from "./ProductInfo";
import { CircleButton } from "./Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ProductCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", data)}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderBottom: SIZES.extraLarge,
          margin: SIZES.base,
          ...SHADOWS.dark,
        }}
        key={data.id}
        handlePress={() => navigation.navigate("Details", data)}
      >
        <View
          style={{
            width: "100%",
            height: 250,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={{ uri: data?.images[0] }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "80%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              right: 8,
              top: 8,
              backgroundColor: COLORS.white,
              borderRadius: 50,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              ...SHADOWS.light,
            }}
            // onPress={handlePress}
          >
            <Icon name="cards-heart" color="#F31559" size={30} />
          </TouchableOpacity>
          {/* <CircleButton imgUrl={assets.heart} right={10} top={10} /> */}
        </View>
        <ProductInfo data={data} />
      </View>
    </TouchableOpacity>
  );
};
