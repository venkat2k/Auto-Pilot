import React from "react";
import { View } from "react-native";
const Hello = () => {
  console.log("In line 4");
  return (
    <View style={{ backgroundColor: "red" }}>
      <button style={{ width: 100, height: 4 }}> Press </button>
    </View>
  );
};

export default Hello;
