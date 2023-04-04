import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SubmitButton = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        marginHorizontal: 20,
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 24,
      }}
      onPress={handleSubmit}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {loading ? "Please wait..." : title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
