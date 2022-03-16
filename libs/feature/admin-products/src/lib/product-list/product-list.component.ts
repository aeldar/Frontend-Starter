import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
