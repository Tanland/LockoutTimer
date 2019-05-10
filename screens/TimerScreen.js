import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Timer from "./components/Timer/Timer"

export default class TimerScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <Timer />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
});
