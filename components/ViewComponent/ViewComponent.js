import React from 'react';
import { Text, View } from 'react-native';

const ViewComponent = () => {
    return (
       <View 
            style={{
                flexDirection: 'row',
                height: 100,
                padding: 20
            }}
       >
           <View style={{backgroundColor: 'blue', flex: 0.3}}></View>
           <View style={{backgroundColor: 'red', flex: 0.5}}></View>
           <Text>Hello World</Text>
       </View>
    );
};

export default ViewComponent;