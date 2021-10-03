import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ViewComponent from './components/ViewComponent/ViewComponent';
import TextComponent from './components/TextComponent/TextComponent';
import ImgComponent from './components/ImgComponent/ImgComponent';
import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import ScrollViewComponent from './components/ScrollViewComponent/ScrollViewComponent';
import StyleComponent from './components/StyleComponent/StyleComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import SwitchComponet from './components/SwitchComponent/SwitchComponet';
import FlatListComponent from './components/FlatListComponent.js/FlatListComponent';
import SectionListComponent from './components/SectionListComponent/SectionListComponent';
import BackHandlerComponent from './components/BackHandlerComponent/BackHandlerComponent';
import DrawerLayoutComponent from './components/DrawerLayoutComponent/DrawerLayoutComponent';
import PermissionAndroidComponent from './components/PermissionAndroidComponent/PermissionAndroidComponent';
import AndroidTostMsgComponent from './components/AdroidTostMsgComponent/AndroidTostMsgComponent';
import ActivityIndicatorComponent from './components/ActivityIndicatorComponent/ActivityIndicatorComponent';
import AlertviewCompnent from './components/AlertViewComponent/AlertviewCompnent';
import AnimatedViewComponent from './components/AnimatedViewComponent/AnimatedViewComponent';
import DimensionViewComponent from './components/DimensionViewComponent/DimensionViewComponent';
import KeyboardAvoidingViewCompo from './components/KeyboardAvoidingViewCompo/KeyboardAvoidingViewCompo';
import LinkingViewCompo from './components/LinkingViewCompo/LinkingViewCompo';
import ModalViewCompo from './components/ModalViewCompo/ModalViewCompo';
import PixelRatioViewCompo from './components/PixelRatioViewCompo/PixelRatioViewCompo';
import RefreshControllerViewCompo from './components/RefreshControllerViewCompo/RefreshControllerViewCompo';
import StatusBarViewCompo from './components/StatusBarViewCompon/StatusBarViewCompo';

const App = () => {
  const style = StyleSheet.create({
    sectionHeading: {
      fontSize: 25,
      fontWeight: '800',
    },
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <DrawerLayoutComponent />
        <ViewComponent />
        <TextComponent />
        <ImgComponent />
        <TextInputComponent />
        <ScrollViewComponent />
        <StyleComponent />

        <ButtonComponent />
        <SwitchComponet />

        <FlatListComponent />
        <SectionListComponent />

        <View>
          <Text style={style.sectionHeading}>Android Components and APIs</Text>
          <BackHandlerComponent />
          <PermissionAndroidComponent/>
        </View>
        <AndroidTostMsgComponent/>

        <ActivityIndicatorComponent/>
        <AlertviewCompnent/>

        <AnimatedViewComponent/>

        <DimensionViewComponent/>

        <KeyboardAvoidingViewCompo/>

        <LinkingViewCompo/>
        <ModalViewCompo/>
        <PixelRatioViewCompo/>
        <RefreshControllerViewCompo/>
        <StatusBarViewCompo/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
