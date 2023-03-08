import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logado: boolean = true

  constructor(private route: Router) {}

  deslogar() {
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
