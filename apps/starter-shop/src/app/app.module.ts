import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENV } from '@starter/env';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponentModule } from '@starter/ui/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, ShellComponentModule],
  providers: [
    {
      provide: ENV,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
