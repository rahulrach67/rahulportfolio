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
        title: 'DevConnect Platform',
        description: 'A real-time developer collaboration platform with live code sharing, pair programming sessions, and integrated version control.',
        tags: ['Angular', 'Node.js', 'Socket.io', 'MongoDB'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      },
      {
        id: 2,
        title: 'AI Task Manager',
        description: 'Smart task management app powered by ML for priority prediction and intelligent scheduling with natural language processing.',
        tags: ['React', 'Python', 'TensorFlow', 'FastAPI'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      },
      {
        id: 3,
        title: 'CryptoWatch Dashboard',
        description: 'Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and advanced charting capabilities.',
        tags: ['Vue.js', 'D3.js', 'WebSockets', 'Redis'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
      },
      {
        id: 4,
        title: 'E-Commerce API',
        description: 'Scalable REST API for e-commerce platforms with microservices architecture, Stripe integration, and comprehensive admin panel.',
        tags: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
      },
      {
        id: 5,
        title: 'Social Analytics Tool',
        description: 'Social media analytics and reporting tool with beautiful data visualizations and automated PDF report generation.',
        tags: ['Angular', 'Chart.js', 'Firebase', 'Tailwind'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
      },
      {
        id: 6,
        title: 'DevOps Pipeline CLI',
        description: 'Command-line tool for automating CI/CD pipelines with multi-cloud support, rollback capabilities, and Slack notifications.',
        tags: ['Go', 'Docker', 'Kubernetes', 'GitHub Actions'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
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
