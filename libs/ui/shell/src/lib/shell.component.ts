import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MeService } from '@starter/data-access';

@Component({
  selector: 'starter-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  readonly isAuthenticated$ = this.meService.isAuthenticated$;
  readonly isAdmin$ = this.meService.isAdmin$;

  constructor(private meService: MeService) {}

  onLogoutClick(): void {
    this.meService.logOut();
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellComponentModule {}
