import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Categories } from "../components/Categories";
import { FocusStatusBar } from "../components/FocusStatusBar";
import { HomeHeader } from "../components/HomeHeader";
import { ProductCard } from "../components/ProductCard";
import { COLORS } from "../constants/theme";
import { products } from "../utils/utils";

export default function Home() {
  const [data, setData] = useState(products);
  const [selectCategory, setSelectCategory] = useState("all");

  const onSearch = (value) => {
    console.log("fcsef");
    if (value.length > 2) {
      setSelectCategory("all");
      setData(
        products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const filterData = (id) => {
    setSelectCategory(id);
    if (id === "all") {
      setData(products);
    } else {
      setData(products.filter((product) => product.categories.includes(id)));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.white} />
      <View style={{ zIndex: 0, marginBottom: 60 }}>
        <HomeHeader onSearch={onSearch} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories filterData={filterData} selectCategory={selectCategory} />
          {!data.length ? (
            <View
              style={{
                paddingTop: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 35 }}>No data found.</Text>
              <Text style={{ fontSize: 16 }}>
                Please search with different keyword or change the category.
              </Text>
            </View>
          ) : (
            data?.map((product, key) => (
              <ProductCard data={product} key={key} />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
