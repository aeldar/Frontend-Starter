import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'starter-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
