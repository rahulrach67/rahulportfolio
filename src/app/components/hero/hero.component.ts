import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  cursorVisible = true;

  private roles = [
    'Full Stack Developer',
    'Angular Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;
  private cursorTimer: any;

  constructor() { }

  ngOnInit(): void {
    this.startTyping();
    this.cursorTimer = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 530);
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
  }

  private startTyping() {
    const currentRole = this.roles[this.roleIndex];
    const typingSpeed = this.isDeleting ? 60 : 110;
    const pauseOnComplete = 2200;
    const pauseOnDelete = 500;

    if (!this.isDeleting && this.charIndex < currentRole.length) {
      this.typedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typeTimer = setTimeout(() => this.startTyping(), typingSpeed);
    } else if (!this.isDeleting && this.charIndex === currentRole.length) {
      this.typeTimer = setTimeout(() => {
        this.isDeleting = true;
        this.startTyping();
      }, pauseOnComplete);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.typedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typeTimer = setTimeout(() => this.startTyping(), typingSpeed);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.typeTimer = setTimeout(() => this.startTyping(), pauseOnDelete);
    }
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
