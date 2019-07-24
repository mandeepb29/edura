import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarVar: boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
  
    // console.log("default value :" +this.navbarVar)
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/lecture'||event['url'] == '/blog') {
          this.navbarVar = true;
          // console.log("function-called - value :" +this.navbarVar +['url'])
        } else {
          this.navbarVar = false;
          // console.log("function-called - value :" +this.navbarVar +['url'])
        }
      }
     
    });
//for search box toggle
    $('#search-input-box').hide();
    $('#search').on('click', function() {
      $('#search-input-box').slideToggle();
      $('#search-input').focus();
    });
    $('#close-search').on('click', function() {
      $('#search-input-box').slideUp(500);
    });
  }

}
