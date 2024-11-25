import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  login() {
    this.router.navigate(['/auth']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/auth']);
  }

  navigateToMarketplace() {
    this.router.navigate(['/market']);
  }

  navigateToSeller() {
    this.router.navigate(['/seller']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
