import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import Logo from "../components/auth/Logo";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    console.log("SIGNUP REQUEST=>", name, email, password);
    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      console.log("SIGN IN SUCCESS =>", data);
      alert("Sign up successful");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Logo />
      <Text style={{ fontSize: 24, color: "#333", textAlign: "center" }}>
        Sign Up
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

      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
    </View>
  );
};

export default Signup;
