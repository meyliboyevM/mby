import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'button-c',
  imports: [
    TranslatePipe
  ],
  templateUrl: './button-c.component.html',
  standalone: true,
  styleUrl: './button-c.component.scss'
})
export class ButtonCComponent {

  @Input() value!: string;
  @Input() animation: boolean = true;

}
