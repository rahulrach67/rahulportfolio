import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Built' },
    { value: '15+', label: 'Happy Clients' },
    { value: '∞', label: 'Lines of Code' }
  ];

  constructor() { }
  ngOnInit(): void { }
}
