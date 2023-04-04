import React from "react";
import { View, Text, Image } from "react-native";

const Logo = () => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("../../assets/splash.png")}
      style={{
        width: 150,
        height: 150,
        marginVertical: 20,
      }}
    />
  </View>
);

export default Logo;
