import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];
  public loading = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = ( document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {

      if (this.peliculasService.cargando) { return; }
      this.peliculasService.getCartelera().subscribe(
        res => {
          this.movies.push(...res);
        }
      );
      console.log('Llamar servicio');
    }

  }

  constructor(
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.peliculasService.getCartelera().subscribe(
      res => {
        this.movies = res;
        this.moviesSlideshow = res;
        this.loading = false;
      }
    );
  }
  ngOnDestroy() {
    this.peliculasService.resetPage();
  }

}
