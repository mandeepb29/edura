import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn,slideInUp,fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [transition('* => *', useAnimation(fadeIn,
     {params: { timing: 1, delay: 0 }} 
     ))]),
     trigger('slide', [transition('* => *', useAnimation(slideInUp,
      {params: { timing: 1, delay: 0 }} 
      ))]),
      trigger('faderight', [transition('* => *', useAnimation(fadeInRight,
        {params: { timing: 1, delay: 0 }} 
        ))])
  ],
})


export class HomeComponent implements OnInit {

  carouselOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    autoPlay:true,
    stagePadding:25,
    autoPlaySpeed:true,
    navText:["<img src='/assets/img/prev.png'>","<img src='/assets/img/next.png'>"],
    
    nav: true,
   
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }

  carouselOptionsfull = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    autoPlay:true,
    autoPlaySpeed:true,
    navText:["<img src='/assets/img/prev.png'>","<img src='/assets/img/next.png'>"],
    
    nav: true,
   
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },
      1500: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  }

  
 

  constructor() { }

  ngOnInit() {

  
  }

}
