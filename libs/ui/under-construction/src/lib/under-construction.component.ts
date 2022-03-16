import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'starter-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstructionComponent {
  @Input() title = '';
  @Input() hasEscapeLinks = true;

  constructor(private location: Location) {}

  onBackClick(event: Event): void {
    event.preventDefault();
    this.location.back();
  }
}

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [UnderConstructionComponent],
  exports: [UnderConstructionComponent],
})
export class UnderConstructionComponentModule {}
