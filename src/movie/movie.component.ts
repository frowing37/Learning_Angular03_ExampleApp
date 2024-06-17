import { Component, OnInit, Output } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';
import { MovieService } from '../services/movie.service';
import { LoggingComponent } from '../logging/logging.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieEditComponent, LoggingComponent],
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})

export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  mainTitle = "Movies List";
  selectedMovie : MovieDto | undefined;
  movies: MovieDto[] | undefined;

  getMainTitle() {
    return this.mainTitle;
  }

  onSelect(movie : MovieDto): void {
    this.selectedMovie = movie;
    console.log('Selected movie:', this.selectedMovie);
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => { this.movies = movies });
  }
  
}
