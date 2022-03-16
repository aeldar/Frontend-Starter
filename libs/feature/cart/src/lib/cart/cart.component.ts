import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartComponentModule {}
