import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ENV } from '@starter/env';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule],
  providers: [
    {
      provide: ENV,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
