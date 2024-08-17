import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    name: '',
    price: null
    
  }

  constructor(private ProductService: ProductService,
              private router: Router
  ){}
  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(()=>{
      this.ProductService.showMessage('Produto cadastrado com sucesso!')
      this.router.navigate(['/products'])

    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
