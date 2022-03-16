import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgModule, OnInit } from '@angular/core';
import { ProductListComponentModule } from '@starter/ui/common';
import { MeService, ProductsService } from '@starter/data-access';
import { PageEvent } from '@angular/material/paginator';
import { Env, ENV } from '@starter/env';
import { BehaviorSubject } from 'rxjs';
import { Product } from '@starter/model';

// For demo purposes
const TOTAL_PRODUCTS = 1000;

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  readonly isAdmin$ = this.me.isAdmin$;
  readonly isAuthenticated$ = this.me.isAuthenticated$;

  readonly total = TOTAL_PRODUCTS;
  readonly productsPerPage = this.env.PRODUCTS_DEFAULT_LIMIT;

  private readonly products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.products.asObservable();

  constructor(@Inject(ENV) private env: Env, private me: MeService, private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(pageIndex: number = 0): void {
    this.productsService.getProducts(pageIndex, this.productsPerPage).subscribe(
      (products) => {
        this.products.next(products);
      },
      (error) => {
        // TODO implement
        console.log('ERROR: ', error);
      }
    );
  }

  onPage(event: PageEvent): void {
    this.fetchProducts(event.pageIndex);
  }
}

@NgModule({
  imports: [CommonModule, ProductListComponentModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class ProductsComponentModule {}
