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
      image: './assets/website.jpg',
      description: 'Project 1 description',
      technologies: ['Tech 1', 'Tech 2'],
      link: 'https://project-1-link.com'
    },
    {
      name: 'Project 2',
      image: './assets/website.jpg',
      description: 'Project 2 description',
      technologies: ['Tech 3', 'Tech 4'],
      link: 'https://project-2-link.com'
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
