import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = (props) => {
  return <View>
    <Text>{props.title}</Text>
    <Text>Image Score: {props.imageScore}</Text>
    <Image source={props.imageSource}/>
  </View>;
};

export default ImageDetail;
