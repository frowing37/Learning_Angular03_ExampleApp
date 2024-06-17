import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
    { path: 'movie', component: MovieComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
      RouterModule.forRoot(routes)
    ],
})

export class AppRoutingModule { }