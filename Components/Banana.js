import React from 'react';
import { Image } from 'react-native';

export default class Bananas extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 90, height: 70, alignItems: 'center'}}/>
    );
  }
}