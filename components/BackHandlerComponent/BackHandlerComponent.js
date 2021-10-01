import React, {useEffect} from 'react';
import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';

const BackHandlerComponent = () => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure? you want to go back.', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.text}>Click The Back Button!</Text>
    </View>
  );
};
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight:'800',
        fontSize: 18
    }
})

export default BackHandlerComponent;
