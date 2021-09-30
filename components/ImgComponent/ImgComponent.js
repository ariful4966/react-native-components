import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImgComponent = () => {
    const style=StyleSheet.create({
        container: {
            paddingTop: 50
        },
        tinyLogo:{
            width:150,
            height:150
        },
        blackBelt:{
            width: '100%',
            height: 300
        }

    })
    return (
        <View style={style.container}>
            <Image 
                style={style.tinyLogo}
                source={{
                    uri: 'https://i.ibb.co/mGYmPZx/house-boart.png'
                }}
            />
            <Image
                style={style.blackBelt}
                source={require('../../picturs/Black-Belt-Web-Developer-05.png')}
            />
        </View>
    );
};

export default ImgComponent;