import { Component, OnInit } from '@angular/core';
import { PortfolioService, Skill } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: string[] = [];
  activeCategory = 'All';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
    const cats = this.skills.map(s => s.category);
    this.categories = ['All', ...Array.from(new Set(cats))];
  }

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'All') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
