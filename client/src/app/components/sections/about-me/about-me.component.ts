import { Component } from '@angular/core';
import {SectionLabelComponent} from '../../../shared/components/section-label/section-label.component';
import {ButtonCComponent} from '../../../shared/components/button-c/button-c.component';

@Component({
  selector: 'about-me',
  imports: [
    SectionLabelComponent,
    ButtonCComponent
  ],
  templateUrl: './about-me.component.html',
  standalone: true,
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
