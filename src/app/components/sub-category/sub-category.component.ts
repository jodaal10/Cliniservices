import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApplication } from 'src/app/utils/types';
import  *  as  data  from  '../../productos.json';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  subCategory: string;
  category: string;
  sub: any;
  Products: DataApplication[];
  imageUrl: string = '../../../assets/archivos/imgproducto/';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0);
    this.sub = this.route.params.subscribe(params => {
      var value = params['name'].split('|'); 
      this.subCategory = value[0]
      this.category = value[1]
      this.loadData();
    });
  }

  loadData(){
    let jsonObj: DataApplication[]= <DataApplication[]>JSON.parse(JSON.stringify(data)).default;
    this.Products = jsonObj.filter((item: DataApplication) => item.Categoria == this.category && item.SubCategoria == this.subCategory);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
