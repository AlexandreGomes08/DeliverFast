import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/delivery-bike.svg';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>();

    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (text: string) => {
        // Remove caracteres não numéricos
        const onlyNumbers = text.replace(/\D/g, '');

        // Verifica se é um CPF (11 números) e aplica a máscara
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
          Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
          // Aqui pode ser chamada uma função de cadastro
          navigation.navigate('BottomRoutes');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Logo style={styles.logo} recizeMode='contain'/>
                <Text style={styles.title}>DeliverFast</Text>
            </View>
            <View style={styles.boxMid}>
                <View style={styles.boxInput}>
                    <MaterialIcons 
                        name='person'
                        size={25}
                        color={'gray'}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='CPF, E-mail ou Username'
                        placeholderTextColor={"#A9A9A9"}
                        value={input}
                        onChangeText={handleInputChange}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.boxInput}>
                    <MaterialIcons 
                        name='lock'
                        size={25}
                        color={'gray'}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='*********'
                        placeholderTextColor={"#A9A9A9"}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.alert}>
                    <Text style={styles.textAlert}>Caso não possuir conta, o cadastro será automático.</Text>
                </View>
                
            </View>
            <View style={styles.boxBottom}>
            </View>
        </View>        
    );
}