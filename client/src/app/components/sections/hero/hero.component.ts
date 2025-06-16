import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonCComponent} from '../../../shared/components/button-c/button-c.component';
import {DotsEffectComponent} from '../../../shared/components/dots-effect/dots-effect.component';

@Component({
  selector: 'hero',
  imports: [
    TranslatePipe,
    ButtonCComponent,
    DotsEffectComponent
  ],
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
