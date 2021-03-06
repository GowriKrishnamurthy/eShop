import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Products list";
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  filteredProducts: IProduct[] = [];

  _listFilter: string = '';

  products: IProduct[] = [];
  private errorMesasge:string;
  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
     this.productService.getProducts().subscribe({
      next: products=> {
        this.products = products
        this.filteredProducts = this.products;
      },
      error: err => this.errorMesasge = err
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List ' + message;
  }
}
