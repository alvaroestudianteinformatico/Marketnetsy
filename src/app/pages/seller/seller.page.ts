import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {
  products: any[] = []; // Lista de productos

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar si se envió un producto desde la página de agregar producto
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['newProduct']) {
      this.products.push(navigation.extras.state['newProduct']);
    }
  }
}
