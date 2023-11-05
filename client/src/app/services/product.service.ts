import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Product[] {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
      id: '1001',
      code: 'f230fagas2',
      name: 'Apple Watch',
      description: 'Product Apple',
      image: 'bamboo-watch.jpg',
      price: 165,
      category: 'Accessories',
      quantity: 1,
      inventoryStatus: 'INSTOCK',
      rating: 5
  }
    ];
  }
}
