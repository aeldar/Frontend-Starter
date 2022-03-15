import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ProductListComponentModule } from '@starter/ui/common';
import { MeService } from '@starter/data-access';

@Component({
  selector: 'starter-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly isAdmin$ = this.me.isAdmin$;

  constructor(private me: MeService) {}
}

@NgModule({
  imports: [CommonModule, ProductListComponentModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class ProductsComponentModule {}
