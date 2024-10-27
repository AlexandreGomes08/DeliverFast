import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Test() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();

  const handleInputChange = (text: string) => {
    const onlyNumbers = text.replace(/\D/g, '');
    if (onlyNumbers.length === 11) {
      const maskedCpf = onlyNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      setInput(maskedCpf);
    } else {
      setInput(text);
    }
  };

  const checkUserExists = (username: string) => {
    // Simula a existência de um usuário
    const existingUsers = ['usuario1', 'usuario2', 'user@example.com'];
    return existingUsers.includes(username);
  };

  const handleLogin = () => {
    if (!input || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (checkUserExists(input)) {
      // Se o usuário existir, redireciona para Home
      navigation.navigate('BottomRoutes');
    } else {
      // Se o usuário não existir, cadastra e redireciona para Home
      Alert.alert('Cadastro Automático', 'Usuário cadastrado com sucesso!');
      // Aqui pode ser chamada uma função de cadastro
      navigation.navigate('BottomRoutes');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email, CPF ou Username"
        value={input}
        onChangeText={handleInputChange}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Logar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
