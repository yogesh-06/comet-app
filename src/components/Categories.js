import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { categories } from "../utils/utils";
import { COLORS } from "../constants";

export const Categories = ({ filterData, selectCategory }) => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => filterData(category.id)}
            >
              <View
                style={{
                  alignItems: "center",
                  marginRight: 8,
                  backgroundColor:
                    category.id === selectCategory
                      ? COLORS.success
                      : "transparent",
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: "grey",
                  minWidth: 85,
                  padding: 7,
                }}
              >
                {/* <Image
							source={category.image}
							style={{
								width: 50,
								height: 40,
								resizeMode: 'contain',
							}}
						/>
						<Text style={{ fontSize: 13, fontWeight: '900' }}>{category.text}</Text> */}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "300",
                  }}
                >
                  {category.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
