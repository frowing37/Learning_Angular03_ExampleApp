import { Injectable } from '@angular/core';
import { MovieDto } from '../models/MovieDto';
import { Movies } from '../data/movie.datasource';
import { Observable, of } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private logService: LogService) { }

  getMovies(): Observable<MovieDto[]> {
    this.logService.add('MovieService: listing movies');
    return of(Movies);
  }
}
