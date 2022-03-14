import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ProductListComponent }])],
})
export class AdminProductsModule {}
