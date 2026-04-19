import { Text, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>🚀 My First App</Text>

      <Text style={styles.counter}>Count: {count}</Text>

      <Button 
        title="Increase" 
        onPress={() => setCount(count + 1)} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    color: 'cyan',
    marginBottom: 20,
  },
});
