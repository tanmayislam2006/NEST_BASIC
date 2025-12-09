import { Injectable, Get, Query } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome To Nest Js!';
  }
  postData(info: object): object {
    console.log(info);
    return info;
  }
  updateData(id: string, info: Record<string, any>) {
    return {
      update: `updated Id ${id}`,
      ...info,
    };
  }
  deleteID(id: string) {
    return {
      success: true,
      message: 'Id delete Successfully ',
      data: id,
    };
  }
  @Get()
  getUserWithQuery(@Query('user') user: string) {
    return {
      message: 'User received',
      user: user,
    };
  }
}
