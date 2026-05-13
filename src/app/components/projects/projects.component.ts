import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  showAll = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

  get displayedProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.slice(0, 3);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
