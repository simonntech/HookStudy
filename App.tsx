import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.big}>0</Text>

      <View style={styles.inline}>
        <Button title='Remover'></Button>
        <Button title='Adicionar'></Button>
      </View>
      
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
  big: {
    fontSize: 40
  },
  inline: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
