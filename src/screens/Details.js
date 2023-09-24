import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Image, Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SHADOWS, SIZES } from "../constants";
import { addItemToCart } from "../redux/action/Actions";

export default function Details({ route, navigation }) {
  const { name, price, images } = route.params;
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addItemToCart(item));
  };

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
            justifyContent: "space-between",
            padding: 12,
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
          >
            <Icon name="cart" color="black" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              height: 400,
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={{ uri: images[0] }}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
              }}
            />
          </View>
        </ScrollView>
        <Text style={{ color: "black", fontSize: 50, fontWeight: "bold" }}>
          {name}
        </Text>

        <View style={{ alignItems: "flex-start", margin: 8 }}>
          <Rating imageSize={30} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 900,
                fontSize: 34,
                color: COLORS.secondary,
              }}
            >
              ₹ {price * count} /-
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.error,
                borderRadius: 10,
                ...SHADOWS.light,
              }}
              onPress={() => setCount(count + 1)}
            >
              <Icon name="plus" color="black" size={28} />
            </TouchableOpacity>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
                padding: 8,
              }}
            >
              {count}
            </Text>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.error,
                borderRadius: 10,
                ...SHADOWS.light,
              }}
              onPress={() => setCount(count - 1)}
              disabled={count === 1 ? true : false}
            >
              <Icon name="minus" color="black" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              color: "black",
              fontSize: SIZES.extraLarge,
              fontWeight: "bold",
              padding: 8,
            }}
          >
            Product Description
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: SIZES.medium,
              paddingLeft: 8,
            }}
          >
            This library has 7.8K stars on Github and provides more than 30
            components support. This library is hight extensible and easy to
            integrate. No extra layering is required to integrate it with bare
            React-Native or with managed Expo
          </Text>
        </View>
        <View
          style={{
            marginLeft: 8,
            marginRight: 8,
            marginTop: 28,
            marginBottom: 20,

            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={handleCart(route.params, count)}
            style={{
              width: "48%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.error,
              borderRadius: 10,
              ...SHADOWS.light,
            }}
          >
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: "bold",
                fontSize: SIZES.medium,
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "48%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.error,
              borderRadius: 10,
              ...SHADOWS.light,
            }}
          >
            <Text
              style={{
                color: COLORS.dark,
                fontWeight: "bold",
                fontSize: SIZES.medium,
              }}
            >
              Proceed to payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
