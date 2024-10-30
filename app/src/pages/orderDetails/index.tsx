// src/pages/OrderDetails.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from "./styles";

type OrderDetailsRouteProp = RouteProp<{ params: { order: Order } }, 'params'>;

interface Order {
  id: number;
  clientName: string;
  products: string[];
  address: string;
  status: 'Pendente' | 'Em andamento' | 'Concluído';
}

export default function OrderDetails() {
  const route = useRoute<OrderDetailsRouteProp>();
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>
      <ScrollView>
        <Text>Cliente: {order.clientName}</Text>
        <Text>Endereço: {order.address}</Text>
        <Text>Status: {order.status}</Text>
        <Text>Produtos:</Text>
        {order.products.map((product, index) => (
          <Text key={index}>- {product}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
