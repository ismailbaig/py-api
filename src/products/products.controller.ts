import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrdersService } from 'src/orders/orderts.service';

@Controller('products')
export class ProducsController {
  constructor(private ordersService: OrdersService) {}
}
