import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certified',
  templateUrl: './certified.component.html',
  styleUrls: ['./certified.component.css']
})
export class CertifiedComponent implements OnInit {
  certifiedtype: string;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0);
    this.sub = this.route.params.subscribe(params => {
      this.certifiedtype = params['name']; // (+) converts string 'id' to a number
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
