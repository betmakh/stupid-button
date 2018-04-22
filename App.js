import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';

// colorPallete: http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
import counter from './utils/counter';
import styles from './components/styles';
import ClickButton from './components/ClickButton';

export default class App extends React.Component {
  state = {
    counter: 0
  };
  constructor(props) {
    super(props);
    var self = this;
    counter.init().then(val => {
      self.setState({
        counter: val
      });
    });
  }
  increment() {
    this.setState({
      counter: counter.increment()
    });
  }
  render() {
    var totalCount = this.state.counter;
    return (
      <View style={styles.container}>
        <Text style={[styles.mainTextColor, styles.header2]}>Total count: {totalCount}</Text>
        <ClickButton onPress={this.increment.bind(this)} />
      </View>
    );
  }
}
