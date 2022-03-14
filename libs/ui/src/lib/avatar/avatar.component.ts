import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'starter-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() url: string | null = null;
}

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarComponentModule {}
