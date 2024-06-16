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
  styleUrls: ['movie.component.css']
})


export class MovieComponent {
  mainTitle = "Movies List";
  selectedMovie : MovieDto = { id:0, name:'aşlsdkdd' };

  getMainTitle() {
    return this.mainTitle;
  }

  constructor() { }

  movies : MovieDto[] = Movies;

  onSelect(movie : MovieDto): void {
    this.selectedMovie = movie;
    console.log('Selected movie:', this.selectedMovie);
  }
}
