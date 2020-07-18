import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
