import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../constants";
import { bottomNav } from "../utils/utils";

export default function BottomNavigation() {
  const navigation = useNavigation();
  const [currentRoute, setCurrentRoute] = useState("Home");

  const handleNavigation = (item) => {
    navigation.navigate(item.name);
    setCurrentRoute(navigation.getCurrentRoute().name);
  };
  return (
    <>
      <Divider style={{ marginBottom: 5 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        {bottomNav?.map((item, index) => {
          let isActive = currentRoute === item.name ? true : false;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleNavigation(item)}
              style={{ alignItems: "center" }}
            >
              <Icon
                name={item.icon}
                color={isActive ? "#FF6701" : COLORS.secondary}
                size={30}
              />
              {isActive && (
                <Text style={{ fontSize: 14, color: "#FF6701" }}>
                  {item.name}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
