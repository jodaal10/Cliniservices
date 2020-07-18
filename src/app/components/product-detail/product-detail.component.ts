import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApplication } from 'src/app/utils/types';
import  *  as  data  from  '../../productos.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productDetails: DataApplication;
  sub: any;
  imageUrl: string = '../../../assets/archivos/imgproducto/';
  pdfUrl: string = '../../../assets/archivos/pdf/';
  certUrl: string = '../../../assets/archivos/certificaciones/';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0);
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['name']; 
      this.loadData();
   });
  }

  loadData(){
    let jsonObj: DataApplication[]= <DataApplication[]>JSON.parse(JSON.stringify(data)).default;
    this.productDetails = jsonObj.find((item: DataApplication) => item.id == this.productId)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
