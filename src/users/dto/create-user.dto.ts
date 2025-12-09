import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateUSerDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsInt()
  age: number;
  @IsString()
  address?: string;
}
