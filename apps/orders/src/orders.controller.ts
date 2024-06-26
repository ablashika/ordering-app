import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
  @Post("orders")
  async createOrder(@Body() request:CreateOrderRequest) {
    return this.ordersService.createOrder(request)

  }

}
