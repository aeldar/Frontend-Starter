import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ProductListComponentModule } from '@starter/ui/common';
import { MeService, ProductsService } from '@starter/data-access';
import { PageEvent } from '@angular/material/paginator';

// For demo purposes
const TOTAL_PRODUCTS = 1000;

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly isAdmin$ = this.me.isAdmin$;

  readonly total = TOTAL_PRODUCTS;

  // TODO implement
  readonly products = this.productsService.getProducts();

  constructor(private me: MeService, private productsService: ProductsService) {}

  onPage(event: PageEvent): void {
    // TODO implement
    console.log('PAge event: ', event);
  }
}

@NgModule({
  imports: [CommonModule, ProductListComponentModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class ProductsComponentModule {}
