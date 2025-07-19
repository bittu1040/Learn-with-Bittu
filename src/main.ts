import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {inject} from '@vercel/analytics'
inject();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
