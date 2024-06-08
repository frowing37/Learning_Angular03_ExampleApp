import { Component } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { Movies } from '../data/movie.datasource';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'movie.component.html',
  styleUrl: 'movie.component.css'
})
export class MovieComponent {
  title = "Movies List";
  selectedMovie : MovieDto | undefined;

  getTitle() {
    return this.title;
  }

  movies : MovieDto[] = Movies;

  onSelect(movie : MovieDto): void {
    this.selectedMovie = movie;
  }
}
