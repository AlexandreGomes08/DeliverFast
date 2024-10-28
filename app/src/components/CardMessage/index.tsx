import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface CardMessageProps {
  id: number;
  clientName: string;
  address: string;
  status: 'pendente' | 'em andamento' | 'concluído';
  products: string[];
}

export default function CardMessage({
  id,
  clientName,
  address,
  status,
  products,
}: CardMessageProps) {
  return (
    <View style={styles.card}>
      <Text>ID: {id}</Text>
      <Text>Cliente: {clientName}</Text>
      <Text>Endereço: {address}</Text>
      <Text>Status: {status}</Text>
      <Text>Produtos:</Text>
      {products.length > 0 ? (
        products.map((product, index) => (
          <Text key={index}>- {product}</Text>
        ))
      ) : (
        <Text>Nenhum produto encontrado</Text>
      )}
    </View>
  );
}
