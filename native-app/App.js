import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [out,set] = useState('Open up to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{out}</Text>
      <Button title="Change" onPress={() => set('hi, This is Rahul')} />
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
