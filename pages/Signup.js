import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import UserInput from "../components/auth/UserInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, color: "#333", textAlign: "center" }}>
        Signup
      </Text>
      <UserInput
        name="Name"
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup;
