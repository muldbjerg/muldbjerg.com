import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Steffen Muldbjerg - Frontend developer');

    this.metaService.updateTag({
      property: 'og:description',
      name: 'description',
      content:
        'Hi, I’m Steffen. I’m a frontend developer focused on creating nice experiences for people on the web.',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Steffen Muldbjerg - Frontend developer',
    });
  }
}
