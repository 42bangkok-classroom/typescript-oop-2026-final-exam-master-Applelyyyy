import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Products } from './products_interface/interface_product';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): ApiResponse<Products[]> {
    return {
      success: true,
      data: this.productsService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
