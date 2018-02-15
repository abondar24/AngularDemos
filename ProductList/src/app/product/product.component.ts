import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass='item';

  constructor() { }

  ngOnInit() {
  }

}
