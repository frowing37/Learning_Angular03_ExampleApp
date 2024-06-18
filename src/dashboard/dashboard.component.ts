import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLink ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  movies: MovieDto[] = [];
  movieLength: number;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() : void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies.slice(0,5));
    this.movieLength = this.movies.length;
  }



}
