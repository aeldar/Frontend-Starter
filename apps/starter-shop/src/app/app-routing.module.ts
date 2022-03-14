import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard, IsAuthenticatedGuard } from '@starter/data-access';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: () => import('@starter/features/products').then((m) => m.ProductsModule),
  },
  {
    path: 'my',
    canActivate: [IsAuthenticatedGuard],
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
    canActivate: [IsAdminGuard],
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
