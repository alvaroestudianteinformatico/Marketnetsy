import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';  // Asegúrate de importar NavigationEnd y RouterEvent

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;

  isLoggedIn: boolean = false;
  isAuthPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthPage = ['/auth', '/register', '/forgot-password'].includes(this.router.url);
      }
    });
  }

  login() {
    console.log('Redirigiendo a inicio de sesión...');
    this.router.navigate(['/auth']);
    this.isLoggedIn = true;
  }

  logout() {
    console.log('Cerrando sesión...');
    this.isLoggedIn = false;
    this.router.navigate(['/auth']);
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
  }
}
