import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDto } from '../models/MovieDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  movie: MovieDto;
  subtitleForEdit = "Edit Movie";

  getEditTitle() { 
    return this.subtitleForEdit;
  }
  
  constructor(private movieService: MovieService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  notSelect(): void {
    this.movie = undefined;
  }

}
