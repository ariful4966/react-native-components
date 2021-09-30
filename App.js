import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';
import ImgComponent from './components/ImgComponent/ImgComponent';
import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import ScrollViewComponent from './components/ScrollViewComponent/ScrollViewComponent';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ViewComponent />
        <TextComponent />
        <ImgComponent />
        <TextInputComponent />
        <ScrollViewComponent/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;