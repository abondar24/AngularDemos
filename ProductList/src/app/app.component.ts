import { Component } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   products: Product[];

   constructor() {
     this.products = [
       new Product(
         'sneakers',
         'Nike Air',
         '/assets/images/products/black-shoes.jpg',
         ['Men', 'Shoes', 'Sport Shoes'],
         89.99),
       new Product(
         'jacket',
         'Blue Jacket',
         '/assets/images/products/blue-jacket.jpg',
         ['Women', 'Apparel', 'Jackets & Vests'],
         238.99),
       new Product(
         'hat-adidas',
         'Adidas Hat',
         '/assets/images/products/black-hat.jpg',
         ['Men', 'Accessories', 'Hats'],
         29.99)
     ];
   }

   productWasSelected(product: Product): void {
     console.log("Product: ",product)
   }
}
