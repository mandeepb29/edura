import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

  constructor() { }

  ngOnInit() {
  }

}
