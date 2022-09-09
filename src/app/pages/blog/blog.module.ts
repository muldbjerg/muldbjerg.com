import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { posts, routes } from './blog.routes';
import { POSTS } from './blog.config';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [BlogComponent, PostComponent, FeedComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [{ provide: POSTS, useValue: posts }],
})
export class BlogModule {}
