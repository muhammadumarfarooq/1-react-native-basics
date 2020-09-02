import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: action.amount };
    case 'green':
      return { ...state, green: action.amount };
    case 'blue':
      return { ...state, blue: action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    
    const onIncreaseColor = (color) => {
      const colorNameLowerCase = color.toLowerCase();
      const currentColorValue = state[colorNameLowerCase];
      if ( currentColorValue + COLOR_INCREMENT > 255 || currentColorValue + COLOR_INCREMENT < 0 )
        return;
      dispatch({ colorTOChange: colorNameLowerCase, amount: currentColorValue + COLOR_INCREMENT });
    };
    
    const onDecreaseColor = (color) => {
      const colorNameLowerCase = color.toLowerCase();
      const currentColorValue = colors[colorNameLowerCase];
      const result = currentColorValue - COLOR_INCREMENT;
      if ( result > 255 || result < 0 )
        return;
      dispatch({ colorTOChange: colorNameLowerCase, amount: currentColorValue - COLOR_INCREMENT });
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
