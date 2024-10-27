export class Order {
    id: number;
    clientName: string;
    products: string[];
    address: string;
    status: 'pendente' | 'em andamento' | 'concluído';
  }
  