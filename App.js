import React from 'react';
import { ScrollView } from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';
import ImgComponent from './components/ImgComponent/ImgComponent';
import TextInputComponent from './components/TextInputComponent/TextInputComponent';

const App = () => {
  return (
   <ScrollView>
     <ViewComponent/>
     <TextComponent/>
     <ImgComponent/>
     <TextInputComponent/>
   </ScrollView>
  );
};

export default App;