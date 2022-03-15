import { MatTooltipModule } from '@angular/material/tooltip';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeService, UsersService } from '@starter/data-access';
import { Observable, map, distinctUntilChanged } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '@starter/model';
import { AvatarComponentModule } from '@starter/ui-common';

@Component({
  selector: 'starter-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly displayedColumns = ['id', 'name', 'avatar', 'role', 'actions'];

  readonly users$: Observable<User[]> = this.users.getUsers();

  readonly currentUserId$: Observable<number | null> = this.me.currentUser$.pipe(
    map((user) => user?.id ?? null),
    distinctUntilChanged()
  );

  constructor(public users: UsersService, private me: MeService) {}

  onImpersonate(user: User): void {
    this.me.impersonate(user);
  }
}

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, AvatarComponentModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
