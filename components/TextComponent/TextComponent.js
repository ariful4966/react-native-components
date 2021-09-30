import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextComponent = () => {
    const [titleText, setTitleText] = useState("Bard's Nest");
    const bodyText = "This is not really a bard's  Nest";

    const style = StyleSheet.create({
        baseText: {
            fontFamily: "sans-serif"
        },
        titleText: {
            fontSize: 20,
            fontWeight: '900'
        }
    })
    return (
        <Text style={style.baseText}>
            <Text style={style.titleText} onPress={() => setTitleText('Welcome the Bard Nest')}>{titleText}</Text>
            {"\n"}
            {"\n"}
            <Text numberOfLines={5}>{bodyText}</Text>
            {'\n'}

            <View>
                <Text>First part and </Text>
                <Text>second part</Text>
            </View>

            <MyTestApp>Hello Friends How are you doing?</MyTestApp>
        </Text>
    );
};

export default TextComponent;


const MyTestApp = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>
                {props.children}
            </Text>
        </View>
    );
};
