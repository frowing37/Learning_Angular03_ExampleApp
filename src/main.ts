import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MovieComponent } from './movie/movie.component';
import { NaviComponent } from './navi/navi.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(MovieComponent, appConfig)
  .catch((err) => console.error(err));
  
bootstrapApplication(NaviComponent, appConfig)
  .catch((err) => console.error(err));
