import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  
  const handleAddColor = () => {
    setColors([...colors, getRandomRGB()]);
  };
  
  return (
    <View>
      <Button title="Add Color" onPress={handleAddColor}/>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => <View style={{ width: 150, height: 150, backgroundColor: item }}/>}
      />
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
