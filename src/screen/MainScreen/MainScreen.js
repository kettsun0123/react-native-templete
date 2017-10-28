import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}