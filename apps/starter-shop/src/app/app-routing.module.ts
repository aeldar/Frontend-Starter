import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('@starter/features/products').then((m) => m.ProductsModule),
  },
  {
    path: 'my',
    children: [
      {
        path: 'cart',
        loadChildren: () => import('@starter/features/cart').then((m) => m.CartModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@starter/features/account').then((m) => m.AccountModule),
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'users',
        loadChildren: () => import('@starter/features/admin-users').then((m) => m.AdminUsersModule),
      },
      {
        path: 'products',
        loadChildren: () => import('@starter/features/admin-products').then((m) => m.AdminProductsModule),
      },
    ],
  },
  {
    path: 'hidden/users',
    loadChildren: () => import('@starter/features/impersonation').then((m) => m.ImpersonationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
