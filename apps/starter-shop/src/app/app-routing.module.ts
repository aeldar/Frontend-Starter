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
    loadChildren: () => import('@starter/feature-products').then((m) => m.ProductsModule),
  },
  {
    path: 'my',
    canActivate: [IsAuthenticatedGuard],
    children: [
      {
        path: 'cart',
        loadChildren: () => import('@starter/feature-cart').then((m) => m.CartModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@starter/feature-account').then((m) => m.AccountModule),
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('@starter/feature-admin-users').then((m) => m.AdminUsersModule),
      },
      {
        path: 'products',
        loadChildren: () => import('@starter/feature-admin-products').then((m) => m.AdminProductsModule),
      },
    ],
  },
  {
    path: 'hidden/users',
    loadChildren: () => import('@starter/feature-impersonation').then((m) => m.ImpersonationModule),
  },
  {
    path: '**',
    loadChildren: () => import('@starter/feature/not-found').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
