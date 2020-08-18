import React from 'react';
import { View, Text, Button } from 'react-native';

const ColorCounter = ({ onIncreaseColor, onDecreaseColor, title, value }) => {
  return (
    <View>
      <Text>{title} {value}</Text>
      <Button title={`Increase ${title}`} onPress={() => onIncreaseColor(title)}/>
      <Button title={`Decrease ${title}`} onPress={() => onDecreaseColor(title)}/>
    </View>
  );
};

export default ColorCounter;
