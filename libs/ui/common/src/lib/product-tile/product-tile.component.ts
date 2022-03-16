import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@starter/model';

@Component({
  selector: 'starter-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTileComponent {
  @Input() product: Product | null = null;
}

@NgModule({
  imports: [CommonModule],
  declarations: [ProductTileComponent],
  exports: [ProductTileComponent],
})
export class ProductTileComponentModule {}
