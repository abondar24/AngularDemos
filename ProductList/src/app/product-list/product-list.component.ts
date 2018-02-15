import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.model";


@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private curProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.curProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if (!product || !this.curProduct){
      return false;
    }
    return product.sku === this.curProduct.sku;
  }
}
