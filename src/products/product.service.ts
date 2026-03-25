import { Injectable } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';
import { Products } from './products_interface/interface_product';
import { ApiResponse } from 'src/interfaces/response.interface';
@Injectable()
export class ProductsService {
  private filePath = path.join(__dirname, '../../data/products.json');

    findAll() : ApiResponse<Products[]> {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    const data_final = JSON.parse(data);
    return data_final;
  }
}
