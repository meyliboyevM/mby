import {CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LayoutComponent} from './@core/layout/layout.component';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'client';
}
