import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const style = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
});

const FlatListComponent = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListComponent;

const Item = ({title}) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);
