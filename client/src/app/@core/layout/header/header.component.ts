import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'header-c',
  imports: [
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
