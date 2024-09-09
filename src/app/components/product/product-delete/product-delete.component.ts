import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product: Product | undefined
  constructor(private productService: ProductService ) {}
  ngOnInit(): void {
    const id = "1";
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(): void{
    if (this.product) {
      this.productService.delete(this.product).subscribe(() => {
        this.productService.showMessage('Produto excluido com sucesso');
        
      });
    } else {
      this.productService.showMessage('Erro: Produto não encontrado');
      // Outra ação, como redirecionar ou logar o erro
    }
  }

  cancel(): void{

  }
}
