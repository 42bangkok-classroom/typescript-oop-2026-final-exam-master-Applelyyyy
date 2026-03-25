import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): ApiResponse<{
    id: number;
    customerName: string;
    purchaseDate: string;
    items: {
      productId: number;
      quantity: number;
      price: number;
    };
    totalPrice: number;
  }> {
    return {
      success: true,
      data: this.productsService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
