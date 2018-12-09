import React from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import Greet from './Components/Greeting';
import BananaImage from './Components/Banana';
import Style from './Components/Style';
import Layout from './Components/Layout';
import FlexBox from './Components/FlexBox';
import TextInput from './Components/TextInput';
import Button from './Components/ButtonBasic';
import ScrollView from './Components/Scroll';
import FlatList from './Components/FlatList';
import SectionList from './Components/SectionList';
import FetchExample from './Components/FetchExample';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(FetchExample);
