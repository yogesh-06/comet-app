import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SHADOWS, SIZES } from "../constants/theme.js";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if ((formData.username, formData.password)) {
      setUserData();
      navigation.navigate("Home");
    } else {
      alert("All fields are required..");
    }
  };

  const setUserData = async () => {
    try {
      await AsyncStorage.setItem("userData", formData.username);
      console.log("saved successfully");
    } catch (error) {
      console.log(error, "not saved");
    }
  };

  return (
    <View>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get("window").height * 0.2,
          width: "100%",
          alignItems: "center",
          paddingTop: 50,
          marginBottom: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Icon name="cart-arrow-right" color="#FF6701" size={60} />
          <Text style={{ fontSize: 40, fontWeight: 600, fontFamily: "serif" }}>
            E-comet
          </Text>
        </View>
      </View>
      <View
        style={{
          elevation: 10,
          backgroundColor: "white",
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#FF6701",
            textAlign: "center",
          }}
        >
          LOGIN
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#FF6701" }}>Username</Text>
          <TextInput
            placeholder="username"
            placeholderTextColor="gray"
            onChangeText={(e) => handleInputChange("username", e)}
            style={{
              borderBottomColor: "#FF6701",
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#FF6701" }}>Password</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(e) => handleInputChange("password", e)}
            style={{
              borderBottomColor: "#FF6701",
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
          />
        </View>
        <Text style={{ color: "#FF6701", fontSize: 16, textAlign: "right" }}>
          Forgot Password?
        </Text>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            width: "90%",
            height: 60,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 70,
            marginBottom: 50,
            borderRadius: 10,
            backgroundColor: "#FF6701",
            ...SHADOWS.light,
          }}
        >
          <Text
            style={{
              color: COLORS.dark,
              fontWeight: "bold",
              fontSize: SIZES.large,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#FF6701", fontSize: 16, textAlign: "center" }}>
          Dont't have an account?
          <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
