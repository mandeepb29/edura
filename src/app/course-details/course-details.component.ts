import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".toggle-section").on('click', function(e) {
         $(this).text((e, text) => text === "-" ? "+" : "-");
         $(`#${ $(this).data("toggle-content") }`).stop().slideToggle();
      });
    });
  
  }

}
