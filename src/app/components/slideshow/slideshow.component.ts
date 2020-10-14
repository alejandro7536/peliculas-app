import {  AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
   this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });
  }

  ngOnInit(): void {

  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrevius() {
    this.mySwiper.slidePrev();
  }
}
