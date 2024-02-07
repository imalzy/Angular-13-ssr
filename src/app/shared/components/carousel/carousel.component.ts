import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  carouselItems = [
    {
      title: ' For All Your <br> Furniture Needs 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.',
      imageUrl: './assets/images/slider-img.png'
    },
    {
      title: ' For All Your <br> Furniture Needs 2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.',
      imageUrl: './assets/images/slider-img.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //  const slideInterval = interval(1000);
    //  slideInterval.subscribe(x=>console.log('x', x));
  }


  selectSlide(slide: number) {
  }

}
