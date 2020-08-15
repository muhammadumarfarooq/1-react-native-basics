import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is homescreen</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title={"Go to List Component"}
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title={"Go to Images Component"}
        onPress={() => navigation.navigate("Images")}
      />
      {/*<TouchableOpacity onPress={() => console.log("Touchable Opacity clicked!")}>*/}
      {/*  <Text>Go to List Demo</Text>*/}
      {/*  /!*<Text>Go to List Demo</Text>*!/*/}
      {/*  /!*<Text>Go to List Demo</Text>*!/*/}
      {/*</TouchableOpacity>*/}
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
