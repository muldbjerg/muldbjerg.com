import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import {
  BlogPost,
  ContentfulApiService,
} from 'src/app/core/services/contentful-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogPosts: Array<Entry<BlogPost>> = new Array();

  constructor(private contentfulApiService: ContentfulApiService) {}

  ngOnInit(): void {
    this.contentfulApiService.getBlogPosts().then((blogPosts) => {
      console.log(blogPosts.items);
      this.blogPosts = blogPosts.items;
    });
  }
}
