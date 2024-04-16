import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isLoggedIn!: boolean;
  constructor(private router: Router) {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')));

    // Should check from lodash
    if (user) {
      this.isLoggedIn = true;
    }
  }

  goToAddImage() {
    this.router.navigate(['/add-picture'])
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
