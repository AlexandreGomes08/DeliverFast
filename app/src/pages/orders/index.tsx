import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import api from '../../services/api';
import CardMessage from "../../components/CardMessage";
import { useNavigation } from "@react-navigation/native";
import { OrdersNavigationProp } from "../../types/navigation";

interface Order {
    id: number;
    clientName: string;
    products: string[];
    address: string;
    status: 'Pendente' | 'Em andamento' | 'Concluído';
}

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'Pendente' | 'Em andamento' | 'Concluído'>('ALL');

    useEffect(() => {
        // Busca os pedidos da API
        api.get<Order[]>('orders')
        .then(({ data }) => {
            setOrders(data);
            setFilteredOrders(data); // Inicialmente exibe todos os pedidos
        })
        .catch((error) => {
            console.error("Erro ao buscar pedidos:", error.message);
        });
    }, []);

    useEffect(() => {
        // Filtra os pedidos com base no status selecionado
        if (selectedStatus === 'ALL') {
        setFilteredOrders(orders);
        } else {
        const filtered = orders.filter(order => order.status === selectedStatus);
        setFilteredOrders(filtered);
        }
    }, [selectedStatus, orders]);

    const handleStatusChange = (status: 'ALL' | 'Pendente' | 'Em andamento' | 'Concluído') => {
        setSelectedStatus(status);
    };

    const navigation = useNavigation<OrdersNavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Text style={styles.title}>Pedidos</Text>
                
                {/*filtro*/}
                <View style={styles.menu}>
                {['ALL', 'Pendente', 'Em andamento', 'Concluído'].map(status => (
                    <TouchableOpacity key={status} onPress={() => handleStatusChange(status as 'ALL' | 'Pendente' | 'Em andamento' | 'Concluído')}>
                    <Text style={[styles.menuItem, selectedStatus === status && styles.selectedMenuItem]}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Text>
                    </TouchableOpacity>
                ))}
                </View>
            </View>

            <View style={styles.boxMid}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredOrders.map(order => (
                        <TouchableOpacity 
                            key={order.id} 
                            onPress={() => navigation.navigate("OrderDetails", { order })}
                        >
                            <CardMessage
                                id={order.id}
                                clientName={order.clientName}
                                address={order.address}
                                status={order.status}
                                products={order.products}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
