import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(
    private router: Router,
    private gtm: GoogleTagManagerService
  ) { }

  ngOnInit(): void {
    console.log(this.movies);

  }

  onClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
    console.log('Movie', movie);
    this.sendTag(movie);
  }

  sendTag(movie: Movie) {
    this.gtm.pushTag({
      "event": "viewMovie",
      "content": {
        "title": movie.title,
        "vote_average": movie.vote_average,
        "release_date": movie.release_date,
        "popularity": movie.popularity,
        "adult": movie.adult
      }
    })
  }

}
