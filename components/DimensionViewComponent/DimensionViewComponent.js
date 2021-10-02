import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const DimensionViewComponent = () => {
  const [dimensions, setDimensions] = useState({window, screen});
  useEffect(()=>{
      const  subscription = Dimensions.addEventListener(
          "change",
          ({window, screen})=>{
              setDimensions(window, screen);
          }
      );
      return ()=> subscription ?.remove();
  })
  return (
    <View>
      <Text>Widow Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}

      <Text>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value])=>(
          <Text>{key} - {value}</Text>
      ))}
    </View>
  );
};

export default DimensionViewComponent;
