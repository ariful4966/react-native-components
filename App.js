import React from 'react';
import { ScrollView } from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';

const App = () => {
  return (
   <ScrollView>
     <ViewComponent/>
     <TextComponent/>
   </ScrollView>
  );
};

export default App;