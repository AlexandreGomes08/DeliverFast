import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

interface CardMessageProps {
  id: number;
  clientName: string; 
  address: string;
  status: 'Pendente' | 'Em andamento' | 'Concluído';
  products: string[];
}

export default function CardMessage({
  id,
  clientName,
  address,
  status,
  products,
}: CardMessageProps) {

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
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.cardStatus}>
          <FontAwesome 
            name={getStatusIcon()} 
            size={17} 
            color={getStatusColor()} 
          />
          <Text style={[styles.textStatus, { color: getStatusColor() }]}>{status}</Text>
        </View>
        <Text style={styles.id}># {id}</Text>
      </View>
      <View style={styles.cardBox}>
          <MaterialIcons 
            name='person'
            size={25}
            color={'#e95032'}
          />
        <Text style={styles.cardDados}>{clientName}</Text>
      </View>
      <View style={styles.cardBox}>       
          <MaterialIcons 
            name='location-on'
            size={25}
            color={'#e95032'}
          />
        <Text style={styles.cardDados}>{address}</Text>
      </View>
      <View style={styles.cardBox}>
          <MaterialIcons 
            name='food-bank'
            size={25}
            color={'#e95032'}
          />
        <Text style={styles.cardDados}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <Text key={index}>- {product}</Text>
            ))
          ) : (
            <Text>Nenhum produto encontrado</Text>
          )}
        </Text>
      </View>
    </View>
  );
}
