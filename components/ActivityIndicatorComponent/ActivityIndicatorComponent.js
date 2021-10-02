import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const ActivityIndicatorComponent = () => {
    return (
       <View>
           <ActivityIndicator/>
           <ActivityIndicator size="large" color="orange"/>
           <ActivityIndicator size="small" color="#ff00ff"/>
           <ActivityIndicator size="large" color="#00ff00"/>
       </View>
    );
};

export default ActivityIndicatorComponent;