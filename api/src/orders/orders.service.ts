import { Injectable } from '@nestjs/common';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private idCounter = 1;

  create(order: Omit<Order, 'id'>): Order {
    const newOrder = { id: this.idCounter++, ...order };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    return this.orders.find(order => order.id === id);
  }

  update(id: number, updateData: Partial<Order>): Order {
    const order = this.findOne(id);
    if (order) {
      Object.assign(order, updateData);
    }
    return order;
  }

  remove(id: number): void {
    this.orders = this.orders.filter(order => order.id !== id);
  }
}
