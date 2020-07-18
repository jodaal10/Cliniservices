import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobile = false;
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 750) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }


}
