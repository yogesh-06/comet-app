import React from "react";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SHADOWS } from "../constants";

// import { useSelector } from "redux";

export default function Cart({ navigation }) {
  const cartItems = useSelector((state) => state);

  // const dispatch = useDispatch();
  // const removeItem = (index) => {
  //   dispatch(removeItemFromCart(index));
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
          padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,
            gap: 12,
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.error,
              ...SHADOWS.light,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Icon name="chevron-left" color="black" size={38} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "700", fontSize: 22 }}> Cart Items</Text>
        </View>
        <Divider style={{ paddingBottom: 1 }} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 12 }}>
            {!cartItems.length ? (
              <View
                style={{
                  paddingTop: 60,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 35 }}>No items found.</Text>
                <Text style={{ fontSize: 16 }}>
                  Please add some items to cart.
                </Text>
              </View>
            ) : (
              cartItems?.map((item, index) => (
                // <View
                //   style={{
                //     flexDirection: "row",
                //     justifyContent: "center",
                //   }}
                // >
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 12,
                    margin: 8,
                    borderRadius: 12,
                    backgroundColor: COLORS.white,
                    ...SHADOWS.medium,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <Image
                      resizeMode="cover"
                      source={{ uri: item?.images[0] }}
                      style={{ width: 80, height: 80 }}
                    />
                    <View>
                      <Text
                        style={{
                          fontWeight: 900,
                          fontSize: 24,
                          color: COLORS.dark,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          marginTop: 4,
                          color: COLORS.dark,
                        }}
                      >
                        Qty. 2 | ₹ {item.price} /-
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 80,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: COLORS.error,
                      ...SHADOWS.light,
                      borderRadius: 10,
                    }}
                    onPress={() => removeItem(index)}
                  >
                    <Icon name="delete" color="black" size={30} />
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
