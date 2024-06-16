import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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

export class MovieEditComponent implements OnInit, OnChanges {

  @Input() movie : MovieDto | undefined;
  subtitleForEdit = "Edit Movie";

  getEditTitle() { 
    return this.subtitleForEdit;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MovieEditComponent changes:', changes);
    this.movie = changes['movie'].currentValue;
  }

  ngOnInit(): void {
    
  }

  notSelect(): void {
    this.movie = undefined;
  }
}
