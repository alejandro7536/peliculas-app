import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { Observable, of } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-response';
import { Cast, CreditRespnse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api_key = '7fc12056fe69f963bdf0012facb0a732';
  private base_url ='https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  constructor(
    private http: HttpClient
  ) { }

  get params() {
    return {
      api_key: this.api_key,
      language: 'es-ES',
      page: this.carteleraPage.toString()
    };
  }

  resetPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {

    if (this.cargando) {
      of([]);
      return;
    }

    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.base_url}/movie/now_playing`, {
      params: this.params
    })
    .pipe(
      tap(() => {
        this.carteleraPage ++;
        this.cargando = false;
      }),
      map( res => res.results)
    );
  }

  buscarPelicula(termino: string): Observable<Movie[]> {

    const params = {...this.params, page: '1', query: termino};

    return this.http.get<CarteleraResponse>(`${this.base_url}/search/movie`, {params})
    .pipe(
      map(res => res.results)
    );
  }

  getPeliculaDetalle(id: string) {
    return this.http.get<MovieDetails>(`${this.base_url}/movie/${id}`, { params: this.params})
    .pipe(
      catchError(err => of(null))
    );
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http.get<CreditRespnse>(`${this.base_url}/movie/${id}/credits`, {params: this.params}).pipe(
      map(res => res.cast),
      catchError(err => of([]))
    );
  }
}
