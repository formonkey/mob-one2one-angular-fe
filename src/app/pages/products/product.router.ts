import { RouterModule } from '@angular/router';
import { ProductComponent } from './components';

export const ProductRouter = RouterModule.forChild([
  {
    path: '',
    component: ProductComponent,
  },
]);
