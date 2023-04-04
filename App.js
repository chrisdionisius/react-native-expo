import { StyleSheet, Text, View } from "react-native";
import Signup from "./pages/Signup";

export default function App() {
  return <Signup />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
