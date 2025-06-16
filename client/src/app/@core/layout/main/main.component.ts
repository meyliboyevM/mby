import {Component } from '@angular/core';
import {ProjectsComponent} from '../../../components/sections/projects/projects.component';
import {SkillsComponent} from '../../../components/sections/skills/skills.component';
import {AboutMeComponent} from '../../../components/sections/about-me/about-me.component';
import {ContactsComponent} from '../../../components/sections/contacts/contacts.component';
import {HeroComponent} from '../../../components/sections/hero/hero.component';

@Component({
  selector: 'main-c',
  imports: [
    ProjectsComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactsComponent,
    HeroComponent
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.scss',
})
export class MainComponent {




}
