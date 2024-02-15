import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/Store/Model/Product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = []
  router = inject(Router)
  httpService = inject(ProductService)
  ngOnInit() {
    this.httpService.GetAllProducts().subscribe(result => {
      this.products = result
    })
  }

  singleProduct(id:number){
    this.router.navigate(['app-product'], { queryParams: { product: id } })
  }
  
}
