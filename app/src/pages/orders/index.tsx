import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import api from '../../services/api';
import CardMessage from "../../components/CardMessage";

interface Order {
  id: number;
  clientName: string;
  products: string[];
  address: string;
  status: 'pendente' | 'em andamento' | 'concluído';
}

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get<Order[]>('orders')
          .then(({ data }) => {
              setOrders(data);
          })
          .catch((error) => {
              console.error("Erro ao buscar pedidos:", error.message);
          });
    }, []);    

    return (
        <View style={styles.container}>
            {orders.map(order => (
                <CardMessage
                    key={order.id}
                    id={order.id}
                    clientName={order.clientName}
                    address={order.address}
                    status={order.status}
                    products={order.products}
                />
            ))}
        </View>
    );
}
