import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.model';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() order: Omit<Order, 'id'>): Order {
    return this.ordersService.create(order);
  }

  @Get()
  findAll(): Order[] {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Order {
    return this.ordersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Order>): Order {
    return this.ordersService.update(Number(id), updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.ordersService.remove(Number(id));
  }
}
