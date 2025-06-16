import {CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import {ProjectComponent} from '../../project/project.component';
import {SectionLabelComponent} from '../../../shared/components/section-label/section-label.component';
import {Project} from '../../../shared/intefaces/project';

@Component({
  selector: 'projects',
  imports: [
    ProjectComponent,
    SectionLabelComponent
  ],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      "title": "TaskBoard",
      "description": "Kanban board for team projects",
      "tags": ["React", "Node.js", "MongoDB"],
      "buttons": ["Live"],
      "stack": "React Node.js MongoDB",
      "banner": 'https://picsum.photos/500/300'
    },
    {
      "title": "CryptoWatch",
      "description": "Real-time cryptocurrency tracker",
      "tags": ["Vue", "Tailwind", "API"],
      "buttons": ["Live", "GitHub"],
      "stack": "Vue Tailwind API",
      "banner": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphotography&psig=AOvVaw132Hl3YKw4jUSBx5KpzvoY&ust=1749797382809000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjmyKyl640DFQAAAAAdAAAAABAE'
    },
    {
      "title": "EduChat",
      "description": "Messaging app for online classrooms",
      "tags": ["Angular", "Firebase", "SCSS"],
      "buttons": ["Live"],
      "stack": "Angular Firebase SCSS",
      "banner": ''
    },
    {
      "title": "WeatherSnap",
      "description": "Instant weather updates by location",
      "tags": ["HTML", "CSS", "JavaScript"],
      "buttons": ["Live", "Code"],
      "stack": "HTML CSS JavaScript",
      "banner": ''
    },
    {
      "title": "FitTrack",
      "description": "Fitness and health progress tracker",
      "tags": ["Next.js", "TypeScript", "Supabase"],
      "buttons": ["Live"],
      "stack": "Next.js TypeScript Supabase",
      "banner": ''
    },
    {
      "title": "BudgetWise",
      "description": "Personal finance planner",
      "tags": ["Svelte", "Express", "SQLite"],
      "buttons": ["Live", "Repo"],
      "stack": "Svelte Express SQLite",
      "banner": ''
    }
  ]

}
