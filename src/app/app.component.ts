import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'Home' },
    { title: 'Segurança', url: 'seguranca', icon: 'settings' },
    { title: 'Login', url: 'login', icon: 'people' },
    { title: 'Bem-Vindo', url: 'bem-vindo', icon: 'reader' },
    { title: 'Séries', url: 'badge', icon: 'tv' }
  ];
}