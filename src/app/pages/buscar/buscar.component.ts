import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string;
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.termino = params.texto;
        this.peliculaService.buscarPelicula(params.texto).subscribe(
          movies => this.movies = movies
        );
      }
    );

  }

}
