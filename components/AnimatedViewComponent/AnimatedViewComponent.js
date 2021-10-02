import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

const AnimatedViewComponent = () => {
  const fadeAmin = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAmin, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAmin, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAmin,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>

      <View style={styles.buttonRow}>
        <Button onPress={fadeIn} title="Fade In View" />
        <Button onPress={fadeOut} title="Fade Out View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});

export default AnimatedViewComponent;
