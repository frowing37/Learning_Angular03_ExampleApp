import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  movies: MovieDto[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() : void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies.slice(0,5));
  }



}
