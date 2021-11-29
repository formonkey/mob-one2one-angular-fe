import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductRemoteService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  public async getProducts(params?: any): Promise<any> {
    const search = new URLSearchParams({ ...params, per_page: 5 });

    return await this.http.get(`${environment.host}/beers?${search}`).toPromise();
  }
}
