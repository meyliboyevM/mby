import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-p-button',
  imports: [],
  templateUrl: './p-button.component.html',
  standalone: true,
  styleUrl: './p-button.component.scss'
})
export class PButtonComponent {

  @Input() value!: string;

}
