import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  selector: 'app-sidenav',
  styleUrl: './sidenav.css',
  templateUrl: './sidenav.html',
})
export class Sidenav {

  links = [
    {path: '/home', label: 'Home', icon: 'home'},
    {path: '/catalogue', label: 'Catalogue', icon: 'menu_book'},
    {path: '/formations/create', label: 'Créer une formation', icon: 'add'},
  ];

}
