import React, {useState} from 'react';

import {Switch, View} from 'react-native';

const SwitchComponet = () => {
  const [isEnable, setIsEnable] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Switch
        onValueChange={() => setIsEnable(!isEnable)}
        value={isEnable}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnable ? '#f5dd4b' : '#f4f3f3'}
      />
    </View>
  );
};

export default SwitchComponet;
