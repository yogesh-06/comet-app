import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../constants";

export default function Splash() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Icon name="cart-arrow-right" color="#FF6701" size={80} />
          <Text style={{ fontSize: 50, fontWeight: 600, fontFamily: "serif" }}>
            E-comet
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: "serif",
            }}
          >
            ___________An online platform to byu Grocery Products..
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
