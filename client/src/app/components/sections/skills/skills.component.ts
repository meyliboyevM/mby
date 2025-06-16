import { Component } from '@angular/core';
import {SectionLabelComponent} from '../../../shared/components/section-label/section-label.component';

@Component({
  selector: 'skills',
  imports: [
    SectionLabelComponent
  ],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  skillsData = [
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python']
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite']
    },
    {
      title: 'Frameworks',
      items: ['Angular', 'React', 'Node.js', 'Express', 'Tailwind CSS']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'Postman', 'Figma', 'VS Code']
    },
    {
      title: 'Others',
      items: ['REST API', 'JWT', 'OAuth2', 'CI/CD', 'WebSockets']
    }
  ]

}
