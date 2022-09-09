import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import {
  BlogPost,
  ContentfulApiService,
} from 'src/app/core/services/contentful-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public routeData: PostModel;
  public routeContent: SafeHtml | null = null;

  constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
    this.routeData = route.snapshot.data as PostModel;
    const sanitizedContent = sanitizer.sanitize(
      SecurityContext.HTML,
      this.routeData.html
    );
    if (sanitizedContent != null) {
      this.routeContent = sanitizer.bypassSecurityTrustHtml(sanitizedContent);
    }
  }
  // blogPost!: Entry<BlogPost>;

  // constructor(
  //   private route: ActivatedRoute,
  //   private meta: Meta,
  //   private title: Title,
  //   private contentfulApiService: ContentfulApiService
  // ) {}

  // ngOnInit(): void {
  //   const slug: string = this.route.snapshot.paramMap.get('slug')!;

  //   console.log(slug);

  //   this.contentfulApiService.getBlogPost(slug).then((blogPost) => {
  //     this.blogPost = blogPost;
  //     console.log(blogPost);

  //     // Set the document title
  //     this.title.setTitle(blogPost.fields.title);
  //   });
  // }
}

export interface PostModel {
  attributes: {
    title: string;
    created: string;
    slug: string;
    exerpt: string;
    tags: string[];
    featureImage: string;
  };
  html: string;
}
