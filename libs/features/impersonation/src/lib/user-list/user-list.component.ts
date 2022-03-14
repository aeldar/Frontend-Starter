import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '@starter/data-access';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '@starter/model';
import { AvatarComponentModule } from '@starter/ui';

@Component({
  selector: 'starter-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly displayedColumns = ['id', 'name', 'avatar', 'role', 'actions'];

  readonly users$: Observable<User[]> = this.users.getUsers();

  constructor(public users: UsersService) {}
}

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, AvatarComponentModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
