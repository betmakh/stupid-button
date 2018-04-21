import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';

// colorPallete: http://paletton.com/#uid=13i0u0kllllaFw0g0qFqFg0w0aF
import counter from './utils/counter';

export default class App extends React.Component {
  state = {
    counter: 0
  };
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
        <TouchableOpacity style={styles.circleButton} onPress={this.increment.bind(this)}>
          <Text style={styles.buttonText}> Touch Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    borderRadius: 100,
    height: 200,
    width: 200,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003333'
  },
  buttonText: {
    color: '#407F7F',
    fontSize: 25,
    fontWeight: 'bold'
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 20
  },
  mainTextColor: {
    color: '#669999'
  },
  container: {
    flex: 1,
    backgroundColor: '#226666',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
