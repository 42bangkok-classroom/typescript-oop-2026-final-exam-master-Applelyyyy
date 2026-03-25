import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as responseInterface from './interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): responseInterface.ApiResponse<{
    service: string;
    version: string;
  }> {
    return {
      success: true,
      data: this.appService.getHello(),
      message: 'Hello NestJS',
    };
  }
}
