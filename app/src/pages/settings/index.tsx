import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Settings() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        // Redefine a navegação para retornar apenas à tela de login
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxUser}>
                <MaterialIcons 
                            name='person'
                            size={60}
                            color={'gray'}
                />
                <Text style={styles.textUser}>Usuário</Text>
                <Text style={styles.textUserTitle}>Conta criada em 29/10/2024</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.boxMid}>
                <View style={styles.boxInfo}>
                    <MaterialIcons 
                        name='settings'
                        size={20}
                        color={'#6B6B6B'}
                    />
                    <Text style={styles.text}>Confiurações</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.boxInfo}>
                    <MaterialIcons 
                        name='history'
                        size={20}
                        color={'#6B6B6B'}
                    />
                    <Text style={styles.text}>Histórico</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.boxInfo}>
                    <MaterialIcons 
                        name='notifications'
                        size={20}
                        color={'#6B6B6B'}
                    />
                    <Text style={styles.text}>Notificações</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.boxInfo}>
                    <MaterialIcons 
                        name='moving'
                        size={20}
                        color={'#6B6B6B'}
                    />
                    <Text style={styles.text}>Resultados</Text>
                </View>
                <View style={styles.divider} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <MaterialIcons 
                    name='logout'
                    size={20}
                    color={'#1d222d'}
                />
                <Text style={styles.textButton}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
}
