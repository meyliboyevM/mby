import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'dots-effect',
  imports: [
    NgForOf
  ],
  templateUrl: './dots-effect.component.html',
  standalone: true,
  styleUrl: './dots-effect.component.scss'
})
export class DotsEffectComponent {

  @Input() class: string = ''

}
