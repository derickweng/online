import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
  ) {
    
  }
}