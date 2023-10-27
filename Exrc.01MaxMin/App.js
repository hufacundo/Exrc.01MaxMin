import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaxMin from './components/MaxMin';

const App = () => {
  return (
    <View style={styles.container}>
      <MaxMin x={18} y={0} /> 
      <MaxMin x={18} y={2} /> 
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
