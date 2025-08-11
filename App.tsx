import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  //UseState
  const [count, setCount] = useState(0)

  //UseEffect - controla efeito colateral - monitora a variável, se não tiver variável, é mudança na tela
  useEffect(() => {
    if (count === 0) {
      Alert.alert("Carrinho", "Carrinho vazio")
    }
  }, [count]);


  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='Remover' onPress={decrementCount}></Button>
        <Button title='Adicionar' onPress={incrementCount}></Button>
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
