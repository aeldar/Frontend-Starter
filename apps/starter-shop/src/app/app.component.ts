import { Component, Inject } from '@angular/core';
import { ENV, Env } from '@starter/env';

@Component({
  selector: 'starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  uri: string;
  constructor(@Inject(ENV) env: Env) {
    this.uri = env.API_URL;
  }
}
