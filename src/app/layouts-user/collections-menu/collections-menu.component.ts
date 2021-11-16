import { Product } from 'app/models/Product';
import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/Category.model';
import { ProductService } from 'app/Services/product.service';

@Component({
  selector: 'app-collections-menu',
  templateUrl: './collections-menu.component.html',
  styleUrls: ['./collections-menu.component.css']
})
export class CollectionsMenuComponent implements OnInit {

  category: Category[];
  product: Product[];
  selectedView: string;

  constructor(
    private productService: ProductService,
  ) { }
  categoryId;
  ngOnInit(): void {
    this.productService.getCate().subscribe((category: any[]) => {
      this.category = category;
      console.log(category);
      this.clickProduct(category[0]._id);
      this.categoryId = category[0]._id;
    });
  }
  clickProduct(id) {
    this.category.forEach(cate =>{
      if(cate._id == id){
        this.product = cate.products
      }
    })
  }

}
