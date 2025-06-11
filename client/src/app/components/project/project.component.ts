import { Component, Input } from '@angular/core';
import {Project} from '../../app.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [
    NgIf
  ],
  templateUrl: './project.component.html',
  standalone: true,
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() data: Project[] | any
}
