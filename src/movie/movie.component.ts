import { Component } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { Movies } from '../data/movie.datasource';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieEditComponent],
  templateUrl: 'movie.component.html',
  styleUrl: 'movie.component.css'
})

export class MovieComponent {

  mainTitle = "Movies List";
  selectedMovie : MovieDto | undefined;
  subTitleForEdit = "Edit Movie";

  getMainTitle() {
    return this.mainTitle;
  }

  getEditTitle() {
    return this.subTitleForEdit;
  }

  movies : MovieDto[] = Movies;

  onSelect(movie : MovieDto): void {
    this.selectedMovie = movie;
  }

  notSelect(): void {
    this.selectedMovie = undefined;
  }
}
