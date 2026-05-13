import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Comptes',
        description: 'a cloud-based accounting software specifically designed for non-profit organizations, NGOs, religious institutions (like churches), trusts, and societies.',
        tags: ['Angular', 'Node.js', 'Postgresql', 'MongoDB','Expressjs'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      },
      {
        id: 2,
        title: 'Eden Parish Management Software',
        description: 'EDEN is a cloud based parish family and member management software with which any Christian parish can manage the entire members of that parish.',
        tags: ['Angular', 'Node.js', 'Postgresql','Express js'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      },
      {
        id: 3,
        title: 'Eden Parish Management App',
       description: 'EDEN is a cloud based parish family and member management software with which any Christian parish can manage the entire members of that parish.',
        tags: ['Angular', 'Node.js', 'Postgresql','Express js'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // Frontend
      { name: 'Angular', level: 92, category: 'Frontend' },
      { name: 'React', level: 85, category: 'Frontend' },
      { name: 'TypeScript', level: 90, category: 'Frontend' },
      { name: 'Vue.js', level: 75, category: 'Frontend' },
      { name: 'SCSS/CSS', level: 88, category: 'Frontend' },
      // Backend
      { name: 'Node.js', level: 87, category: 'Backend' },
      { name: 'Python', level: 80, category: 'Backend' },
      { name: 'REST APIs', level: 92, category: 'Backend' },
      { name: 'GraphQL', level: 72, category: 'Backend' },
      // Database & DevOps
      { name: 'MongoDB', level: 83, category: 'Database' },
      { name: 'PostgreSQL', level: 78, category: 'Database' },
      { name: 'Docker', level: 76, category: 'DevOps' },
      { name: 'AWS', level: 70, category: 'DevOps' },
      { name: 'Git / GitHub', level: 93, category: 'DevOps' }
    ];
  }
}
