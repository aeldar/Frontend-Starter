import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponentModule } from '@starter/ui/under-construction';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {}

@NgModule({
  imports: [CommonModule, UnderConstructionComponentModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartComponentModule {}
