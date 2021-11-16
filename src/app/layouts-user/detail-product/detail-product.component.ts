import { ProductService } from './../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) { }
  categoryId;
  productId;
  Product;
  ngOnInit(): void {
    this.router.params.subscribe(sucess => {
      console.log(sucess)
      this.productId = sucess.productId;
      this.getProduct(this.productId);
    });
  }
  getProduct(productId: string) {
    this.productService.getProductsById(productId).subscribe(data=>{
      this.Product = data;
      console.log(this.Product);
    });
  }
}
