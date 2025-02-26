import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent, NotFoundComponentModule } from './not-found.component';

@NgModule({
  imports: [CommonModule, NotFoundComponentModule, RouterModule.forChild([{ path: '**', component: NotFoundComponent }])],
})
export class NotFoundModule {}
