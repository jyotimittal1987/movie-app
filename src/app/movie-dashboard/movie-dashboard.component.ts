import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models/movie-list';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  movies = MOVIES;
  temp: Movie[] = this.movies;
  displayNoRecords: boolean = false;
  searchText: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    this.displayNoRecords = false;
    this.movies = this.temp.filter((result) =>
      result?.movieTitle?.includes(this.searchText)
    );
    if (this.movies.length == 0) {
      this.displayNoRecords = true;
    }
  }
  reset() {
    this.searchText = '';
    this.movies = [...this.temp];
    this.displayNoRecords = false;

  }

}
