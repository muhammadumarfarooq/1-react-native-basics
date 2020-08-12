import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = "Umar";
  return (
    <View>
      <Text style={style.textStyle}>Getting started with React Native!</Text>
      <Text style={style.secondaryTextStyle}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  secondaryTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;

//So far I learn about the React Native
// Section Number 1 and 2
// How to run React native App that we write on the window inside the Real Phone
/*
* Setting up a real phone is easier than the emulator.
* I am using the folder that is provided by the Stephen Grider.
* Install the npm packages. using yarn install command
* Run the project yarn start
* Install the expo inside of my phone.
* scan the QR code.
* It will run our app.
*
* JSX
* JSX is the special dilact of the JS.
* It looks like html but its not.
* After this intro of the JSX. I see how can we make a component
* Making a component involves 4 steps
* 1. Import the packages i.e React from react and Text, StyleSheet form react-native
* 2. Write a function that will return some amount of JSX.
* 3. declare the styles to style our component.
* 4. export the component so it can be used on the other places.
* After this I see one common error that beginners do about every time. single and multi line JSX.
* After making the componet we will show it inside the phone.
* import the componet in App.js
* Here in App.js we have stackNavigator.
* Stack Navigator: its a little object that shows our component inside the mobile at a point of time.
* Component: ComponentScreen
*   initialRouteName
* After all of this we do a small coding exercise and successfully completed it.
* Section # 3
*
* */
