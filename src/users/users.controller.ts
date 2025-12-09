import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() userInfo: Record<string, any>) {
    return this.usersService.createUser(userInfo);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') id: string,
    @Body() updateInfo: Record<string, any>,
  ) {
    return this.usersService.updateUser(id, updateInfo);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') id: string) {
    return this.usersService.deleteUser(id);
  }
}
