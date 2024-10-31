// src/pages/OrderDetails.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import { styles } from './styles';
import api from '../../services/api';
import { OrdersStackParamList } from '../../types/navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


type OrderDetailsRouteProp = RouteProp<OrdersStackParamList, 'OrderDetails'>;

export default function OrderDetails() {
    const route = useRoute<OrderDetailsRouteProp>();
    const { order } = route.params;
    const [status, setStatus] = useState(order.status);
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const navigation = useNavigation();

    useEffect(() => {
        const requestLocationPermissionAndGetCoordinates = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted') {
                Alert.alert("Permissão negada", "O aplicativo precisa de permissão para acessar a localização.");
                return;
            }
    
            try {
                const [geocode] = await Location.geocodeAsync(order.address);
                if (geocode) {
                    setLocation({
                        latitude: geocode.latitude,
                        longitude: geocode.longitude,
                    });
                    console.log("Coordenadas obtidas:", geocode);
                } else {
                    console.log("Nenhuma coordenada encontrada para o endereço.");
                }
            } catch (error) {
                console.error("Erro ao buscar coordenadas:", error);
            }
        };
    
        requestLocationPermissionAndGetCoordinates();
    }, [order.address]);
    

    const showRedirectAlert = (newStatus: "Pendente" | "Em andamento" | "Concluído") => {
        Alert.alert('Sucesso', `Pedido ${newStatus}!
Redirecionando para a tela de Pedidos.`, [
            {
                text: "OK",
                onPress: () => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{name: 'Orders'}]
                        })
                    )
                }
            }
        ]);
    }

    const showConfirmationAlert = (newStatus: "Pendente" | "Em andamento" | "Concluído") => {
        Alert.alert(
            "Confirmação de Ação",
            "Deseja continuar com a ação?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Ação cancelada"),
                style: "cancel"
              },
              {
                text: "Confirmar",
                onPress: () => {
                    if (newStatus){
                        api.put(`/orders/${order.id}`, { status: newStatus });
                        setStatus(newStatus);
                        showRedirectAlert(newStatus)}
                    }
              }
            ]
        );
    }

    const updateOrderStatus = async (newStatus: 'Em andamento' | 'Concluído') => {
        try {
            
            showConfirmationAlert(newStatus);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível atualizar o status do pedido.');
            console.error("Erro ao atualizar o status:", error.message);
        }
    };

    const CustomButton = ({ title, onPress }) => (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    // Função para definir a cor do status
    const getStatusColor = () => {
        switch (status) {
        case 'Pendente':
            return '#ffd543';
        case 'Em andamento':
            return '#00a5ff';
        case 'Concluído':
            return '#00f8a9';
        }
    };
    // Função para definir o ícone do status
    const getStatusIcon = () => {
        switch (status) {
        case 'Pendente':
            return 'clock-o';
        case 'Em andamento':
            return 'spinner';
        case 'Concluído':
            return 'check-circle'; 
        default:
            return 'question-circle';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Text style={styles.title}>Detalhes do Pedido</Text>
            </View>
            <View style={styles.boxMid}>
                <View style={styles.cardBox}>
                    <MaterialIcons 
                        name='person'
                        size={25}
                        color={'#e95032'}
                    />
                    <Text style={styles.cardDados}>{order.clientName}</Text>
                </View>
                <View style={styles.cardBox}>       
                    <MaterialIcons 
                        name='location-on'
                        size={25}
                        color={'#e95032'}
                    />
                    <Text style={styles.cardDados}>{order.address}</Text>
                </View>
                <View style={styles.cardBox}>
                    <MaterialIcons 
                        name='food-bank'
                        size={25}
                        color={'#e95032'}
                    />
                    <Text style={styles.cardDados}>{order.products.join(', ')}</Text>
                </View>
                <View style={styles.cardStatus}>
                    <FontAwesome 
                        name={getStatusIcon()} 
                        size={20} 
                        color={getStatusColor()} 
                    />
                    <Text style={[styles.textStatus, { color: getStatusColor() }]}>{status}</Text>
                </View>


                <View style={styles.boxButton}>
                {status === 'Pendente' && (
                    <CustomButton 
                        title="Saído para a entrega"
                        onPress={() => updateOrderStatus('Em andamento')}
                    />
                )}

                {status === 'Em andamento' && (
                    <CustomButton
                        title="Pedido entregue"
                        onPress={() => updateOrderStatus('Concluído')}
                    />
                )}

                {status === 'Concluído' && (
                    <View style={styles.buttonView}>
                        <Text style={styles.completedText}>Pedido concluído</Text>
                    </View>
                )}
                </View>
            </View>
            <View style={styles.boxMap}>
                {location ? (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title="Endereço do pedido"
                            description={order.address}
                        />
                    </MapView>
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Carregando mapa...</Text>
                )}
            </View>
        </View>
    );
}
