import {CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { initFlowbite } from 'flowbite';
import {ProjectComponent} from './components/project/project.component';
import {NgIf} from '@angular/common';
import {PButtonComponent} from './shared/components/p-button/p-button.component';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  buttons: string[];
  stack: string;
}
@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    TranslatePipe,
    ProjectComponent,
    NgIf,
    PButtonComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'client';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    initFlowbite();
  }
  switchLang(lang: any) {
    this.translate.use(lang.target.value);
  }

  navItems: {name: string, path: string, id: string}[] = [
    {name: 'home', path: '/', id: 'home'},
    {name: 'projects', path: '#projects',id: 'projects'},
    {name: 'skills', path: '#skills',id: 'skills'},
    {name: 'about-me', path: '#about-me', id: 'about-me'},
    {name: 'contacts', path: '#contacts', id: 'contacts'},
  ]

  projects: Project[] = [
    {
      "title": "TaskBoard",
      "description": "Kanban board for team projects",
      "tags": ["React", "Node.js", "MongoDB"],
      "buttons": ["Live"],
      "stack": "React Node.js MongoDB"
    },
    {
      "title": "CryptoWatch",
      "description": "Real-time cryptocurrency tracker",
      "tags": ["Vue", "Tailwind", "API"],
      "buttons": ["Live", "GitHub"],
      "stack": "Vue Tailwind API"
    },
    {
      "title": "EduChat",
      "description": "Messaging app for online classrooms",
      "tags": ["Angular", "Firebase", "SCSS"],
      "buttons": ["Live"],
      "stack": "Angular Firebase SCSS"
    },
    {
      "title": "WeatherSnap",
      "description": "Instant weather updates by location",
      "tags": ["HTML", "CSS", "JavaScript"],
      "buttons": ["Live", "Code"],
      "stack": "HTML CSS JavaScript"
    },
    {
      "title": "FitTrack",
      "description": "Fitness and health progress tracker",
      "tags": ["Next.js", "TypeScript", "Supabase"],
      "buttons": ["Live"],
      "stack": "Next.js TypeScript Supabase"
    },
    {
      "title": "BudgetWise",
      "description": "Personal finance planner",
      "tags": ["Svelte", "Express", "SQLite"],
      "buttons": ["Live", "Repo"],
      "stack": "Svelte Express SQLite"
    }
  ]

  portfolioSkills = {
    languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    tools: ['Git', 'Docker', 'Postman', 'Figma', 'VS Code'],
    frameworks: ['Angular', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    others: ['REST API', 'JWT', 'OAuth2', 'CI/CD', 'WebSockets'],
  };

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
