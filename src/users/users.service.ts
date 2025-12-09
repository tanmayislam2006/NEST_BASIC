import { Injectable } from '@nestjs/common';
import { CreateUSerDto } from './dto/create-user.dto';
export interface User {
  id: string;
  [key: string]: any;
}
@Injectable()
export class UsersService {
  private users: User[] = [];
  getAllUsers() {
    return {
      success: true,
      message: 'the url hit the url /users',
      data: this.users,
    };
  }
  createUser(userInfo: CreateUSerDto) {
    const newUser = {
      id: Date.now().toString(),
      ...userInfo,
    };
    this.users.push(newUser);
    return {
      success: true,
      message: 'user created successfully',
      data: newUser,
    };
  }
  getUserById(id: string) {
    const result = this.users.find((u) => u.id === id);

    return {
      success: true,
      message: 'User Info Get Successfully',
      data: result,
    };
  }
  updateUser(id: string, updateData: Record<string, any>) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new Error('User Not Found');
    Object.assign(user, updateData);
    return {
      success: true,
      massage: 'user updated ',
      data: user,
    };
  }
  deleteUser(id: string) {
    this.users = this.users.filter((u) => u.id !== id);
    return {
      success: true,
      massage: 'user delete success fully',
    };
  }
}
