import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(@Inject(POSTS) posts: Routes) {
    posts.sort(BlogComponent.comparePostDates);
    this.postRoutes = posts.slice(0, 20);
  }
}
