import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, SIZES, assets } from "../constants";

export const HomeHeader = ({ onSearch }) => {
  const [userData, setUserData] = useState("");

  const getUserData = async () => {
    try {
      setUserData(await AsyncStorage.getItem("userData"));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.font,
        paddingVertical: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
            Hey, hi {userData}
          </Text>
        </View>
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: SIZES.extraLarge,
          }}
        >
          What would you buy today?
        </Text>
        <View style={{ marginTop: SIZES.font, marginBottom: SIZES.small }}>
          <View
            style={{
              width: "100%",
              borderRadius: 12,
              backgroundColor: "#F5F5F5",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Icon name="magnify" color="gray" size={30} />

            <TextInput
              placeholder="Search products"
              style={{ flex: 1 }}
              onChangeText={onSearch}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
