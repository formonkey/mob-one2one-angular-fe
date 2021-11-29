import { NgModule } from '@angular/core';
import { ModalModule } from '@cowoco/angular';

import { IconModule } from './icons';
import { TableModule } from './tables';
import { SearchModule } from './searches';
import { ContainerModule } from './container';

const modules = [
  IconModule,
  ModalModule,
  TableModule,
  SearchModule,
  ContainerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class ElementModule {}
