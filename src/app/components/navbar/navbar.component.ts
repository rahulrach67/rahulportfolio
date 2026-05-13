import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: '01. About', href: '#about' },
    { label: '02. Skills', href: '#skills' },
    { label: '03. Projects', href: '#projects' },
    { label: '04. Contact', href: '#contact' }
  ];

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollTo(href: string) {
    this.closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
