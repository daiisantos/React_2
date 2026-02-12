import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Cadastro</Text>
      </View>

      <TextInputExample />

      <StatusBar style="auto" />
    </View>
  );
}

const TextInputExample = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <View>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
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
    borderRadius: 100,
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
