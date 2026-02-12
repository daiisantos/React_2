import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Esqueceu a senha</Text>
      </View>

      <TextInputExample />

      <StatusBar style="auto" />
    </View>
  );
}

const TextInputExample = () => {

  const [email, setEmail] = React.useState('');


  return (
    <View>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setemail}
        placeholder="Digite seu email"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d79c',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    width: 250,
    borderCurve: 30,
  },

  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#dbe0cc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
