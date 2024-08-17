import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrdersService } from 'src/orders/orderts.service';

@Controller('products')
export class ProducsController {
  constructor(private ordersService: OrdersService) {}

//   @Get('gtpo/:user_id')
//   async getUserOrder(@Param('user_id')   
//   user_id: string) {
//     return await this.ordersService.getUserOrder(user_id);
//   }
}