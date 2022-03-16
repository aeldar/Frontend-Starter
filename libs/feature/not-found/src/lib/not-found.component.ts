import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  constructor(private location: Location) {}

  onBackClick(event: Event): void {
    event.preventDefault();
    this.location.back();
  }
}

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundComponentModule {}
