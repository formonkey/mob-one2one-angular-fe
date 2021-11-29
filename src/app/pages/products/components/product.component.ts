import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services';

@Component({
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss', ],
})

export class ProductComponent implements OnInit {
  public products: any;

  constructor(
    private readonly service: ProductService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.products = await this.service.getProducts();

    console.log(this.products);
  }

  public search(value: string): void {
    console.log(value);
  }

  public pageChanged(event: any): void {
    console.log(event);
  }
}
