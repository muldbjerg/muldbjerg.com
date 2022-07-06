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
    this.titleService.setTitle('Steffen Muldbjerg');
    this.metaService.addTags([
      {
        name: 'description',
        content: 'This is an article about Angular Meta service',
      },
    ]);
  }
}
