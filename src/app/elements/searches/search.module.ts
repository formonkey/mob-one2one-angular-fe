import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icons';
import { SearchComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    IconModule,
  ],
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent,
  ],
})

export class SearchModule {}
