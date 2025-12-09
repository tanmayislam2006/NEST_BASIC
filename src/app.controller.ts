import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postData(@Body() info: Record<string, any>) {
    return this.appService.postData(info);
  }
  @Put(':id')
  updateData(
    @Param('id') id: string,
    @Body() theUpdateInfo: Record<string, any>,
  ) {
    return this.appService.updateData(id, theUpdateInfo);
  }
  @Delete(':userID')
  deleteUser(@Param('userID') userID: string) {
    return this.appService.deleteID(userID);
  }
}
