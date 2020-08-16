import React from 'react';
import { View, Button } from 'react-native';

const ColorScreen = () => {
  const handleAddColor = () => {
    console.log("Handle Add color");
  };
  return (
    <View>
      <Button title="Add Color" onPress={handleAddColor}/>
      <View style={{ width: 150, height: 150, backgroundColor: getRandomRGB() }}/>
    </View>
  );
};

const getRandomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
