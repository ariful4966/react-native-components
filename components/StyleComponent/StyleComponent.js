import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StyleComponent = () => {
    const style = StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: '#eaeaea'
        },
        title:{
            marginTop: 16,
            paddingVertical: 8,
            borderWidth:4,
            borderColor: '#20232a',
            borderRadius:6,
            backgroundColor: "#61dafb",
            color: '#20232a',
            textAlign: 'center',
            fontSize:30,
            fontWeight:'bold'
        }
    })
    return (
        <View style={style.container}>
            <Text style={style.title}>React Native</Text>
        </View>
    );
};

export default StyleComponent;