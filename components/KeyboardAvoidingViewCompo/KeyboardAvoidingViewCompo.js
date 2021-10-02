import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const KeyboardAvoidingViewCompo = () => {
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'iso' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <TextInput placeholder="username" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer:{
      backgroundColor: 'white',
      marginTop: 12
  }
});

export default KeyboardAvoidingViewCompo;
