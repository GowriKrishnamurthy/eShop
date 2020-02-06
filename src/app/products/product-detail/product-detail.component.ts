import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: string ='';

  constructor(private route: ActivatedRoute, 
              private productService: ProductService, 
              private router: Router) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param)
    {
      const id = +param;
      // this.pageTitle += `$id`;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err=> this.errorMessage = err
    });
  }
  onBackClick() {
    this.router.navigate(['/products']);
  }
}
