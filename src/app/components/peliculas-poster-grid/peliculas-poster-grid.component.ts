import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.movies);

  }

  onClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);

  }

}
