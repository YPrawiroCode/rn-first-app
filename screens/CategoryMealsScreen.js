import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={StyleSheet.screen}>
      <Text>The Categories Meal Screen!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
