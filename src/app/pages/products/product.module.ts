import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementModule } from '../../elements';
import { ProductComponent } from './components';
import { ProductRouter } from './product.router';
import { ProductRemoteService, ProductService } from './services';

@NgModule({
  imports: [
    CommonModule,

    ProductRouter,

    ElementModule,
  ],
  declarations: [
    ProductComponent,
  ],
  providers: [
    ProductService,
    ProductRemoteService,
  ],
})

export class ProductModule {}
