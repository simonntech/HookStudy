import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const reducer = (
  state: { counter: number },
  action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default function App() {
  //UseState
  //const [count, setCount] = useState(0);

  //UseEffect - controla efeito colateral - monitora a variável, se não tiver variável, é mudança na tela
  // useEffect(() => {
  //   if (count === 0) {
  //     Alert.alert("Carrinho", "Carrinho vazio")
  //   }
  // }, [count]);

  //UseReducer - guiado a eventos
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  const incrementCount = () => {
    dispatch({ type: 'increment' })
  }

  const decrementCount = () => {
    dispatch({ type: 'decrement' })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{state.counter}</Text>

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
