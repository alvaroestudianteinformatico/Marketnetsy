import { Component } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage {
  products: any[] = [
    {
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      image: 'assets/product1.jpg',
      quantity: 10,
      price: 100,
    },
    {
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      image: 'assets/product2.jpg',
      quantity: 5,
      price: 200,
    },
  ]; // Lista de productos simulada

  constructor() {}

  buyProduct(product: any) {
    if (product.quantity > 0) {
      alert(`Has comprado: ${product.name}`);
      product.quantity--;
    } else {
      alert('Este producto está agotado.');
    }
  }
}
