import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {initFlowbite} from 'flowbite';

@Component({
  selector: 'navbar',
  imports: [
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLang(lang: any) {
    this.translate.use(lang.target.value);
  }

  navItems: {name: string, path: string, id: string}[] = [
    {name: 'home', path: '/', id: 'home'},
    {name: 'projects', path: '#projects',id: 'projects'},
    {name: 'skills', path: '#skills',id: 'skills'},
    {name: 'about-me', path: '#about-me', id: 'about-me'},
    {name: 'contacts', path: '#contacts', id: 'contacts'},
  ]


}
