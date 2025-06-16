import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';
import {ButtonCComponent} from '../../shared/components/button-c/button-c.component';
import {Project} from '../../shared/intefaces/project';

@Component({
  selector: 'app-project',
  imports: [
    NgIf,
    ButtonCComponent
  ],
  templateUrl: './project.component.html',
  standalone: true,
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() data: Project[] | any
}
