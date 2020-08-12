import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>This is homescreen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: "teal",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default HomeScreen;
