import { Injectable } from '@angular/core';

import { ProductRemoteService } from './product-remote.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly remoteService: ProductRemoteService,
  ) {}

  public async getProducts(params?: any): Promise<any> {
    return await this.remoteService.getProducts(params);
  }
}
