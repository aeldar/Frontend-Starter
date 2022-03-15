import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Product} from "@starter/model";

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
}

@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
