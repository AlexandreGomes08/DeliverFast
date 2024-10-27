import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/delivery-bike.svg';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login(){

    const [inputValue, setInputValue] = useState<string>('');

    // Função para aplicar a máscara de CPF
    const aplicarMascaraCPF = (valor: string): string => {
        valor = valor.replace(/\D/g, ''); // Remove qualquer caractere que não seja número

        // Aplica a máscara de CPF no formato 000.000.000-00
        if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }

        return valor;
    };

    // Função de atualização do input com verificação de CPF
    const handleChange = (valor: string) => {
        // Verifica se o valor parece um CPF (até 11 dígitos sem formatação)
        if (/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(valor) || valor.replace(/\D/g, '').length <= 11) {
        valor = aplicarMascaraCPF(valor);
        }

        setInputValue(valor);
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
                        value={inputValue}
                        onChangeText={handleChange}
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
                    />
                </View>
                <TouchableOpacity style={styles.button}>
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