import React, { useEffect, useState } from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple,
} from "react-native-paper";

import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { profileSections } from "../utils/utils";

const ProfileScreen = ({ navigation }) => {
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

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flex: 1,
          // backgroundColor: COLORS.primary,
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
          <Text style={{ fontWeight: "700", fontSize: 22 }}>My Account</Text>
        </View>
        <Divider style={{ paddingBottom: 1 }} />
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image source={assets.person01} size={100} />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {userData}
              </Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
              },
            ]}
          >
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <Text style={{ fontSize: 18, fontWeight: 800, margin: 12 }}>
            My Orders
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {profileSections.map((item, index) => (
              <TouchableRipple onPress={() => {}} key={index}>
                <View style={styles.menuItem}>
                  <Icon name={item.icon} color="#FF6347" size={32} />
                  <Text style={styles.menuItemText}> {item.name}</Text>
                </View>
              </TouchableRipple>
            ))}
          </View>
          <Divider style={{ paddingBottom: 2, borderRadius: 10 }} />
        </View>
        <View style={{ margin: 18 }}>
          <View style={styles.row}>
            <Icon name="account" color="#777777" size={30} />
            <Text
              style={{
                color: "black",
                marginLeft: 20,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Edit profile
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker" color="#777777" size={32} />
            <Text
              style={{
                color: "black",
                marginLeft: 20,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Shipping Address
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginTop: 14,
              gap: 8,
              backgroundColor: "#FF6701",
              ...SHADOWS.light,
            }}
          >
            <Icon name="logout" color={COLORS.primary} size={22} />

            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "bold",

                fontSize: SIZES.large,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 80,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 24,
  },
  menuItemText: {
    color: "#777777",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 32,
  },
});
