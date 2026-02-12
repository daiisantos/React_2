import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, onChangeText, onChangeNumber, text, number, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';


//inicio tela1
export  function App() {
  return (
    <View style={styles.container}>
       <View style={styles.navbar}>
        <Text style={styles.navbarText}>Login</Text>
      </View>

       <Image
        style={styles.image}
        source={require(
          "perfil.png"
        )}
      />


      <Text style={styles.email}> Email </Text>


       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite seu email:"
         
        />


        <Text style={styles.email}> Senha </Text>


       <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite sua senha:"
         
        />
     <TouchableOpacity
  style={styles.button}
  onPress={() => alert('Botão apertado com sucesso')}
>
  <Text style={styles.buttonText}>Logar</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => alert('Botão apertado com sucesso')}
>
  <Text style={styles.buttonText}>Cadastrar-se</Text>
</TouchableOpacity>



      <Text style={styles.email}> Esqueceu a Senha </Text>


    </View>
  );
}
//final tela1

//inicio tela2
export default  function Cadastro() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Cadastro</Text>
      </View>

      <TextInputCadastro />

      <StatusBar style="auto" />
    </View>
  );
}

const TextInputCadastro = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <View style={{ alignItems: 'center' }}>
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
<View style={{ alignItems: 'center' }}></View>
      <TouchableOpacity
  style={styles.button}
  onPress={() => alert('Botão apertado com sucesso')}
>
  <Text style={styles.buttonText}>cadastrar</Text>
</TouchableOpacity>
    </View>
  );
};
//final tela2

//ínicio tela3
export   function tela3() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Esqueceu a senha</Text>
      </View>

      <TextInputSenha />

      <StatusBar style="auto" />
    </View>
  );
}

function TextInputSenha() {

  const [email, setEmail] = React.useState('');


  return (
   <View style={{ alignItems: 'center' }}>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        secureTextEntry />

         <TouchableOpacity
  style={styles.button}
  onPress={() => alert('Botão apertado com sucesso')}
>
  <Text style={styles.buttonText}>enviar</Text>
</TouchableOpacity>
    </View>
  );
}

//fim tela3
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#d2d79c',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 60, 
},

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#e7e5e5',
    width: 250,
    
  },

  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#6d7b43',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbarText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    fontWeight: 'bold',
  },
   image:{
    margin: 30,
    height:130,
    width:120,
    borderRadius: 20
  },
 button: {
  backgroundColor: '#6b7c32',
  height: 45,
  width: 200,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
},

buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

 
});
