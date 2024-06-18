import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggingComponent } from './logging/logging.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(MovieComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(MovieEditComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(NavbarComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(DashboardComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(LoggingComponent, appConfig)
  .catch((err) => console.error(err));

