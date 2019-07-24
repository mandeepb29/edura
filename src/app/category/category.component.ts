import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

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
        nav: false,
        stagePadding:0,
      },
      600: {
        items: 2,
        nav: true
        ,stagePadding:0,
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
        nav: false,
        stagePadding:0
      },
      600: {
        items: 1,
        nav: true,
        stagePadding:0
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
