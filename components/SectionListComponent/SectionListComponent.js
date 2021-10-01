import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const style = StyleSheet.create({
  item: {
    backgroundColor: '#f9c200',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
});

const SectionListComponent = () => {
  const renderHeader = ({section: {title}}) => (
    <Text style={style.header}>{title}</Text>
  );
  const renderItem = ({item}) => <Item title={item} />;

  return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
      />
    </SafeAreaView>
  );
};

const Item = ({title}) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);

export default SectionListComponent;
