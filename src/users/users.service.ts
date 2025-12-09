import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUSerDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    const users = await this.usersRepository.find();
    return {
      success: true,
      message: 'the url hit the url /users',
      data: users,
    };
  }

  async createUser(userInfo: CreateUSerDto) {
    const newUser = this.usersRepository.create(userInfo);
    const savedUser = await this.usersRepository.save(newUser);
    return {
      success: true,
      message: 'user created successfully',
      data: savedUser,
    };
  }

  async getUserById(id: string) {
    const result = await this.usersRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('User Not Found');
    }
    return {
      success: true,
      message: 'User Info Get Successfully',
      data: result,
    };
  }

  async updateUser(id: string, updateData: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    // Merge updates
    this.usersRepository.merge(user, updateData);
    const updatedUser = await this.usersRepository.save(user);

    return {
      success: true,
      message: 'user updated ',
      data: updatedUser,
    };
  }

  async deleteUser(id: string) {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User Not Found');
    }
    return {
      success: true,
      message: 'user delete success fully',
    };
  }
}
