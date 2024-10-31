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
        const cleanedText = text.replace(/[.-]/g, '');

    
        if (text.length == 11) {
            const maskedCpf = text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            setInput(maskedCpf);
        } else if (text.length == 15) {
            setInput(cleanedText);
        }
        else{
            setInput(text);
        }
    };

    const checkUserExists = (username: string) => {
        const existingUsers = ['usuario1', 'usuario2', 'user@gmail.com'];
        return existingUsers.includes(username);
    };
    
    const handleLogin = () => {
        if (!input || !password) {
          Alert.alert('Erro', 'Preencha todos os campos.');
          return;
        }
    
        if (checkUserExists(input)) {
            navigation.reset({
                index: 0,
                routes: [{ name: "BottomRoutes" }],
            });
        } else {
            Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
            navigation.reset({
                index: 0,
                routes: [{ name: "BottomRoutes" }],
            });
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
                        placeholder='**********'
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