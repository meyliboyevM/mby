import { Component } from '@angular/core';
import {SectionLabelComponent} from '../../../shared/components/section-label/section-label.component';

@Component({
  selector: 'contacts',
  imports: [
    SectionLabelComponent
  ],
  templateUrl: './contacts.component.html',
  standalone: true,
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
