import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({title, imageScore, imageSource}) => {
  return <View>
    <Text>{title}</Text>
    <Text>Image Score: {imageScore}</Text>
    <Image source={imageSource}/>
  </View>;
};

export default ImageDetail;
