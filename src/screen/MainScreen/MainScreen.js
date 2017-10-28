import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Realm from 'realm';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  /* Lifecycle */
  componentWillMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
    });
  }

  /* private methods */
  


  render() {
    const info = this.state.realm ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length : 'Loading...';

    return (
      <View style={styles.container}>
        <Text>
          {info}
        </Text>
      </View>
    );
  }
}