import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Product } from '@starter/model';
import { ProductTileComponentModule } from '../product-tile/product-tile.component';

const PAGE_SIZE = 10;

@Component({
  selector: 'starter-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly pageSize = PAGE_SIZE;

  @Input() isAdmin = false;
  @Input() total = 0;
  @Input() products: Product[] = [];

  @Output() page = new EventEmitter();

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}

@NgModule({
  imports: [CommonModule, MatPaginatorModule, ProductTileComponentModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
