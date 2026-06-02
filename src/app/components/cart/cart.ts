import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  constructor(public productService: ProductService, public loginService: LoginService) { }

  checkout() {
    Swal.fire({
      title: "Clear Orders completed!",
      icon: "success",
      draggable: true
    });
    this.productService.clearCart();
    localStorage.removeItem('cart');
  }

}
