import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is homescreen</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => console.log("Button pressed successfully!")}
      />
    </View>
  );
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
