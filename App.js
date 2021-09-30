import React from 'react';
import { ScrollView } from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';
import ImgComponent from './components/ImgComponent/ImgComponent';

const App = () => {
  return (
   <ScrollView>
     <ViewComponent/>
     <TextComponent/>
     <ImgComponent/>
   </ScrollView>
  );
};

export default App;