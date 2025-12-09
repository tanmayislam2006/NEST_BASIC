import { PartialType } from '@nestjs/mapped-types';
import { CreateUSerDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUSerDto) {}
