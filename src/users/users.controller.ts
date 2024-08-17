import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/adduser')
  async createUser(@Body() model: usersDTO) {
    return await this.usersService.createUser(model);
  }
}