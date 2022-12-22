import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BlogComponent } from '../blog.component';
import { POSTS } from '../blog.config';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  public postRoutes: Routes;

  constructor(
    @Inject(POSTS) posts: Routes,
    private titleService: Title,
    private metaService: Meta
  ) {
    posts.sort(BlogComponent.comparePostDates);
    this.postRoutes = posts.slice(0, 20);
  }

  ngOnInit() {
    this.titleService.setTitle('Blog | Steffen Muldbjerg - Frontend developer');

    this.metaService.updateTag({
      property: 'og:description',
      name: 'description',
      content:
        'I share experiments, designs and code snippets from my chair as a Frontend developer building KeyShot',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Blog | Steffen Muldbjerg - Frontend developer',
    });
  }
}
