import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
    { path: 'movies', component: MovieComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: MovieDetailComponent }
];

@NgModule({
    exports: [ RouterModule, FormsModule, CommonModule ],
    imports: [
      RouterModule.forRoot(routes)
    ],
})

export class AppRoutingModule { }