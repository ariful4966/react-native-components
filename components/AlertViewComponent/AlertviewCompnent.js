import React from 'react';
import {Button, View, StyleSheet, Alert} from 'react-native';

const AlertviewCompnent = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('Ok Press'),
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <Button title="2-Button Alert" onPress={createTwoButtonAlert} />
      <Button title="3-Button Alert" onPress={createThreeButtonAlert}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AlertviewCompnent;
