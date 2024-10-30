// src/types/navigation.ts
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type Order = {
  id: number;
  clientName: string;
  products: string[];
  address: string;
  status: 'Pendente' | 'Em andamento' | 'Concluído';
};

export type OrdersStackParamList = {
  Orders: undefined;
  OrderDetails: { order: Order };
};

export type OrderDetailsRouteProp = RouteProp<OrdersStackParamList, "OrderDetails">;
export type OrdersNavigationProp = StackNavigationProp<OrdersStackParamList>;
