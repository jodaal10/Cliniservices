import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  *  as  data  from  '../../productos.json';
import { DataApplication } from '../../utils/types';
import { HostListener } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryname: string;
  sub: any;
  subCategories: DataApplication[] = [];
  imageUrl: string = '../../../assets/archivos/imgproducto/';

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    //var top = $(window.location.hash).offset().top;
    //$(window).scrollTop(top);
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0);
    this.sub = this.route.params.subscribe(params => {
      this.categoryname = params['name']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.loadData();
   });
   
  }

  loadData(){
    let jsonObj: DataApplication[]= <DataApplication[]>JSON.parse(JSON.stringify(data)).default;
    var category = jsonObj.filter((item) => item.Categoria == this.categoryname)
    var result = [...new Set(category.map(it => it.SubCategoria))];
    result.map(s => {
      var subi = jsonObj.find( item => item.SubCategoria == s);
      this.subCategories.push(subi)
    })
    console.log(this.subCategories);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
