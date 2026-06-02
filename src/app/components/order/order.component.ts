// import { Component, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-order',
//   imports: [CommonModule],
//   templateUrl: './order.html',
//   styleUrl: './order.scss',
// })
// export class Order {
//   orders = signal<any[]>([]);
//   constructor(public productService: ProductService) { }

//   checkout() {
//     this.checkoutoutSuccess();
//   }

//   checkoutoutSuccess() {
//     alert('Order placed successfully!');
//     this.orders.set(this.productService.cart());
//     this.productService.clearCart();
//   }

// }


import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrdersComponent {
  orders = signal<any[]>([]);
  successMessage = signal<string | null>(null);

  constructor(public productService: ProductService) { }

}
