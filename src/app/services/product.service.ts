import { Injectable, signal } from '@angular/core';
import Swal from 'sweetalert2';
import { Product, productData } from '../../assets/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: Product[] = productData;

  cart = signal<CartItem[]>([]);
  orders = signal<CartItem[]>([]);

  contructor() {
    this.loadCart();
    this.loadOrders();
  }

  addToCart(product: Product) {
    this.cart.update(items => {
      const existing = items.find(i => i.product.title === product.title);
      let updated;
      if (existing) {
        updated = items.map(i =>
          i.product.title === product.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updated = [...items, { product, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  }

  removeFromCart(product: Product) {
    this.cart.update(items => {
      const updated = items
        .map(i =>
          i.product.title === product.title ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  }

  clearCart() {
    this.cart.set([]);
    localStorage.removeItem('cart');
  }

  checkoutCart() {
    const currentCart = this.cart();
    if (currentCart.length > 0) {
      // merge into orders
      const updatedOrders = [...this.orders(), ...currentCart];
      this.orders.set(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));

      // clear cart
      this.clearCart();
    }
    this.orderHasbeenPlacedSuccessfully();
  }

  orderHasbeenPlacedSuccessfully() {
    Swal.fire({
      title: "Order placed successfully!",
      icon: "success",
      draggable: true
    });
  }

  loadCart() {
    const stored = localStorage.getItem('cart');
    if (stored) this.cart.set(JSON.parse(stored));
  }

  loadOrders() {
    const stored = localStorage.getItem('orders');
    if (stored) this.orders.set(JSON.parse(stored));
  }

  clearOrders() {
    if (confirm('Are you sure you want to clear all orders?')) {
      this.orders.set([]);
      localStorage.removeItem('orders');
    }
  }

  getCartTotal(): number {
    return this.cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getOrdersTotal(): number {
    return this.orders().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

}
