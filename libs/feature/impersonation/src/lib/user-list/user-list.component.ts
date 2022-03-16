import { MatTooltipModule } from '@angular/material/tooltip';
import { ChangeDetectionStrategy, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeService, UsersService } from '@starter/data-access';
import { distinctUntilChanged, map, Observable, share, Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '@starter/model';
import { AvatarComponentModule } from '@starter/ui/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit, OnDestroy {
  readonly displayedColumns = ['id', 'name', 'avatar', 'role', 'actions'];

  readonly users$: Observable<User[]> = this.users.getUsers().pipe(share());

  readonly currentUserId$: Observable<number | null> = this.me.currentUser$.pipe(
    map((user) => user?.id ?? null),
    distinctUntilChanged()
  );

  private sub = new Subscription();

  constructor(public users: UsersService, private me: MeService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.sub.add(
      this.users$.subscribe({
        error: () => this.handleNetworkError(),
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onImpersonate(user: User): void {
    this.me.impersonate(user);
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  private handleNetworkError(): void {
    this.snackbar
      .open('Please, start the backend emulator first', 'Refresh')
      .onAction()
      .subscribe(() => window.location.reload());
  }
}

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSnackBarModule, AvatarComponentModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
