import { RouterModule } from '@angular/router';

export const BootstrapRouter = RouterModule.forRoot([
  {
    path: '',
    loadChildren: () => import('../pages/products').then((m) => m.ProductModule),
  },
]);
