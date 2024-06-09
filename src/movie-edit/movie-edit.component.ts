import { Component, OnInit, Input } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'movie-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})

export class MovieEditComponent implements OnInit {

  @Input() movie: MovieDto | undefined

  constructor() { }

  ngOnInit(): void {

  }

}
