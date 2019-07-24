import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-video-lecture',
  templateUrl: './video-lecture.component.html',
  styleUrls: ['./video-lecture.component.css']
})
export class VideoLectureComponent implements OnInit {

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
