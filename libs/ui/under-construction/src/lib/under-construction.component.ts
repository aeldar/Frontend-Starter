import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'starter-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstructionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [UnderConstructionComponent],
  exports: [UnderConstructionComponent],
})
export class UnderConstructionComponentModule {}
