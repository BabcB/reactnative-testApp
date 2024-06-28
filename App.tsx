import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [bool, setBool] = useState(true);

  const handlePress = () => {
    setBool((prev) => !prev);
  };

  return (
    <View style={styles.app}>
      <StatusBar style="auto" backgroundColor={bool ? 'pink' : 'green'} />
      <View style={styles.container}>
        <Text>{String(bool)}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={handlePress} title="Click me" />
          <Button onPress={handlePress} title="Click me" />
          <Button onPress={handlePress} title="Click me" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: { display: 'flex', flexDirection: 'row', gap: 10 },
});
