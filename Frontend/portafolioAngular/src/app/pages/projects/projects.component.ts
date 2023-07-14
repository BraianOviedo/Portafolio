import { Component } from '@angular/core';
import { Project } from '../project.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Project 1',
      image: './assets/mobile.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab architecto voluptatum facere ut, quis inventore minima iste necessitatibus accusantium quo?',
      technologies: ['Tech 3', 'Tech 4'],
      link: 'https://localhost/'
    },
    {
      name: 'Project 2',
      image: './assets/mobile.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab architecto voluptatum facere ut, quis inventore minima iste necessitatibus accusantium quo?',
      technologies: ['Tech 3', 'Tech 4'],
      link: 'https://localhost/'
    },
    {
      name: 'Project 3',
      image: './assets/mobile.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab architecto voluptatum facere ut, quis inventore minima iste necessitatibus accusantium quo?',
      technologies: ['Tech 3', 'Tech 4'],
      link: 'https://localhost/'
    },
    {
      name: 'Project 4',
      image: './assets/mobile.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab architecto voluptatum facere ut, quis inventore minima iste necessitatibus accusantium quo?',
      technologies: ['Tech 3', 'Tech 4'],
      link: 'https://localhost/'
    },
    // Add more projects as needed
  ];

  // projects: Project[];

  // constructor(private projectService: ProjectService) { }

  // ngOnInit(): void {
  //   this.fetchProjects();
  // }

  // fetchProjects(): void {
  //   this.projectService.getProjects().subscribe(
  //     (projects: Project[]) => {
  //       this.projects = projects;
  //     },
  //     (error: any) => {
  //       console.log('Error fetching projects:', error);
  //     }
  //   );
  // }
}
