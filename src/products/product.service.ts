import { Injectable } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';
import { Products } from './products_interface/interface_product';
import { ApiResponse } from 'src/interfaces/response.interface';
@Injectable()
export class ProductsService {
  private filePath = path.join(__dirname, '../../data/products.json');

  private readFile() {
    if (!fs.existsSync(this.filePath)) return [];
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return data ? JSON.parse(data) : [];
  }
  findAll(): ApiResponse<Products[]> {
    return this.readFile();
  }
}
