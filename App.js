import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleList from "./simpleList"

export default function App() {
  return (
    <View style={styles.container}>
      <SimpleList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
