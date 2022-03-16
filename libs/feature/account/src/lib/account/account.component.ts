import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountComponentModule {}
