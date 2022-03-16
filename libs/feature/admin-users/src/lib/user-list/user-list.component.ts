import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
