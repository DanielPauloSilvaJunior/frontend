import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrl: './products-crud.component.css'
})
export class ProductsCrudComponent  {
  constructor (private router: Router) {}
  
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }
}
