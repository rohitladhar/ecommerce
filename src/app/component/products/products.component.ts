import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/Store/Model/Product.model';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = []
  httpService = inject(ProductService)
  ngOnInit() {
    this.httpService.GetAllProducts().subscribe(result => {
      this.products = result
    })

  }
  tiles: Tile[] = [
    { text: 'Four', cols: 1, rows: 3, color: '#DDBDF1' },
    { text: 'Four', cols: 1, rows: 3, color: '#DDBDF1' },
    { text: 'Four', cols: 1, rows: 3, color: '#DDBDF1' },
    { text: 'Four', cols: 1, rows: 3, color: '#DDBDF1' },
  ];
}
