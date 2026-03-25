import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import * as responseInterface from 'src/interfaces/response.interface';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): responseInterface.ApiResponse<{
    service: string;
    version: string;
  }> {
    return {
      success: true,
      data: this.productsService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
