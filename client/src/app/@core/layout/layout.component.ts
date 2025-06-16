import {Component, HostListener} from '@angular/core';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {NgIf} from '@angular/common';
import {LeftAsideComponent} from './left-aside/left-aside.component';
import {RightAsideComponent} from './right-aside/right-aside.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'layout',
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NgIf,
    LeftAsideComponent,
    RightAsideComponent
  ],
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300; // Show button after scrolling 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
