import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OdersRepository } from './oders.repository';


@Injectable()
export class OrdersService {

  constructor(private readonly ordersRepository: OdersRepository){}
  async createOrder(request:CreateOrderRequest) {
  
    return this.ordersRepository.create(request)

  }
}
