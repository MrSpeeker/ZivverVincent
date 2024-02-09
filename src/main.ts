import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { providers } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: providers,
}).catch((err) => console.error(err));
