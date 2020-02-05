import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route:ActivatedRoute, private productService : ProductService) {
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
  }
}
