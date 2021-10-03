import React, {useState} from 'react';
import {Button, Platform, StatusBar, View, Text, StyleSheet} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const StatusBarViewCompo = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusbarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusbarStyle(STYLES[0]);
    } else {
      setStatusbarStyle(STYLES[styleId]);
    }
  };
  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {'\n'}
          {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style:{'\n'}
          {statusBarStyle}
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.textStyle}>
            StatusBar Transition: {'\n'}
            {statusBarTransition}
          </Text>
        ) : null}
      </StatusBar>
      <View style={styles.buttonContainer}>
        <Button style={{marginBottom: 8}} title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button style={{marginBottom: 8}} title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        <Button style={{marginBottom: 8}} title="Change StatusBar Transition" onPress={changeStatusBarTransition}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    buttonContainer:{
        padding: 10
    },
    textStyle:{
        textAlign: 'center',
        marginBottom: 8
    }
})

export default StatusBarViewCompo;
