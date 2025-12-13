import { IsEmail, IsInt, IsString } from 'class-validator';

export class UpdateUSerDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsInt()
  age: number;
  @IsString()
  address?: string;
  @IsString()
  role: string;
}
