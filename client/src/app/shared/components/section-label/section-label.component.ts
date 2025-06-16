import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'section-label',
  imports: [
    NgIf,
    TranslatePipe
  ],
  templateUrl: './section-label.component.html',
  standalone: true,
  styleUrl: './section-label.component.scss'
})
export class SectionLabelComponent {

  @Input() navigateId: string = ''
  @Input() title!: string;
  @Input() link?: string;
  @Input() hasLine?: boolean = false;
  @Input() symbol?: string = '#';

}
