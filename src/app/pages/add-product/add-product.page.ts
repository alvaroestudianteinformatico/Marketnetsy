import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  product = {
    name: '',
    description: '',
    image: '',
    quantity: null,
    price: null,
  };

  constructor(private router: Router) {}

  saveProduct() {
    if (this.product.name && this.product.price && this.product.quantity) {
      // Aqui guardar el producto en Firebase o en un servicio local
      console.log('Producto guardado:', this.product);

      // Redirigir a la página del vendedor
      this.router.navigate(['/seller'], {
        state: { newProduct: this.product },
      });
    } else {
      alert('Por favor completa todos los campos obligatorios.');
    }
  }
}
