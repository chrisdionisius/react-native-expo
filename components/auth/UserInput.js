import React from "react";
import { Text, View, TextInput } from "react-native";

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text style={{ fontWeight: "400" }}>{name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        onChangeText={(text) => setValue(text)}
        value={value}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default UserInput;
