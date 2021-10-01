import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';
import ImgComponent from './components/ImgComponent/ImgComponent';
import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import ScrollViewComponent from './components/ScrollViewComponent/ScrollViewComponent';
import StyleComponent from './components/StyleComponent/StyleComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ViewComponent />
        <TextComponent />
        <ImgComponent />
        <TextInputComponent />
        <ScrollViewComponent/>
        <StyleComponent/>

        <ButtonComponent/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;