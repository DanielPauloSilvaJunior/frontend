import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  product: Product | undefined;
  //product: any;

  constructor(
    private productService : ProductService,
    private router: Router,
    private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id')
  //   this.productService.readById(id).subscribe((product: Product) =>{
  //     this.product = product
  //   });
  // }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.readById(id).subscribe((product: Product) => {
        this.product = product;
      });
    } else {
      // Tratar o caso em que o id é nulo, por exemplo, redirecionando para uma página de erro
      this.router.navigate(['/error-page']);
    }
  }
  

  updateProduct(): void {
    if (this.product) {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage('Produto atualizado com sucesso');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.showMessage('Erro: Produto não encontrado');
      // Outra ação, como redirecionar ou logar o erro
    }
  }
  

  cancel(): void {
    this.router.navigate(['/products'])
  }

}


// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from '../product.model';

// @Component({
//   selector: 'app-product-update',
//   templateUrl: './product-update.component.html',
//   styleUrl: './product-update.component.css'
// })
// export class ProductUpdateComponent implements OnInit {

//   product: Product | undefined;

//   constructor(
//     private productService: ProductService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id !== null) {
//       const idNumber = Number(id);  // Converte para número
//       if (!isNaN(idNumber)) {
//         this.productService.readById(idNumber).subscribe((product: Product) => {
//           this.product = product;
//         });
//       } else {
//         this.router.navigate(['/error-page']); // Trata id não numérico
//       }
//     } else {
//       this.router.navigate(['/error-page']);
//     }
//   }
  

//   updateProduct(): void {
//     if (this.product) {
//       this.productService.update(this.product).subscribe(() => {
//         this.productService.showMessage('Produto atualizado com sucesso');
//         this.router.navigate(['/products']);
//       });
//     } else {
//       this.productService.showMessage('Erro: Produto não encontrado');
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/products']);
//   }
// }
