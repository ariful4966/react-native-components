import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, View } from 'react-native';

const TextInputComponent = () => {

    const [text, setText] = useState('')
    const [number, setNumber] = useState(0)
    const style = StyleSheet.create({
        input: {
            height: 40,
            borderWidth: 1,
            margin: 12,
            padding: 10
        }
    })
    return (
        <SafeAreaView>
            <TextInput
                style={style.input}
                placeholder="Leave a comments"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <TextInput
                style={style.input}
                onChange={(e)=>setNumber(e.target.value)}
                placeholder="Type any Number"
                value={number}
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

export default TextInputComponent;




