import React, { useState } from 'react';
import { View } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
    const [colors, setColors] = useState({
      red: 0,
      green: 0,
      blue: 0
    });
    const { red, green, blue } = colors;
    
    const onIncreaseColor = (color) => {
      const colorNameLowerCase = color.toLowerCase();
      const currentColorValue = colors[colorNameLowerCase];
      if ( currentColorValue + COLOR_INCREMENT > 255 || currentColorValue + COLOR_INCREMENT < 0 )
        return;
      setColors({ ...colors, [colorNameLowerCase]: currentColorValue + COLOR_INCREMENT });
    };
    
    const onDecreaseColor = (color) => {
      const colorNameLowerCase = color.toLowerCase();
      const currentColorValue = colors[colorNameLowerCase];
      const result = currentColorValue - COLOR_INCREMENT;
      if ( result > 255 || result < 0 )
        return;
      setColors({ ...colors, [colorNameLowerCase]: result });
    };
    
    return (
      <View>
        <ColorCounter
          onDecreaseColor={onDecreaseColor}
          onIncreaseColor={onIncreaseColor}
          title="Red"
          value={red}/>
        <ColorCounter
          onDecreaseColor={onDecreaseColor}
          onIncreaseColor={onIncreaseColor}
          title="Green"
          value={green}/>
        <ColorCounter
          onDecreaseColor={onDecreaseColor}
          onIncreaseColor={onIncreaseColor}
          title="Blue"
          value={blue}/>
        
        <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
      </View>
    );
  }
;

export default SquareScreen;
