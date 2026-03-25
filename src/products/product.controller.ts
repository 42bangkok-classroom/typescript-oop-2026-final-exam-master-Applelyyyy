import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll() {
    return {
      success: true,
      data: this.productsService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
