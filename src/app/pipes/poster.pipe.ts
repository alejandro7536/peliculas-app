import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    // https://image.tmdb.org/t/p/w500/{{movie.poster_path}}
    let path = '';

    if (poster) {
      path = `https://image.tmdb.org/t/p/w500/${poster}`;
    } else {
      path = './assets/img/no-image.jpg';
    }
    return path;
  }

}
