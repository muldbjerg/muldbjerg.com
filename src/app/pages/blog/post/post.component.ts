import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public routeData: PostModel;
  public routeContent: SafeHtml | null = null;

  constructor(
    route: ActivatedRoute,
    sanitizer: DomSanitizer,
    private title: Title,
    private metaService: Meta
  ) {
    this.routeData = route.snapshot.data as PostModel;
    const sanitizedContent = sanitizer.sanitize(
      SecurityContext.HTML,
      this.routeData.html
    );
    if (sanitizedContent != null) {
      this.routeContent = sanitizer.bypassSecurityTrustHtml(sanitizedContent);
    }
  }

  ngOnInit(): void {
    this.title.setTitle(
      this.routeData.attributes.title +
        ' | Steffen Østerby Muldbjerg - Frontend developer'
    );

    this.metaService.updateTag({
      property: 'og:description',
      name: 'description',
      content: this.routeData.attributes.excerpt,
    });

    this.metaService.updateTag({
      property: 'og:title',
      content:
        this.routeData.attributes.title +
        ' | Steffen Østerby Muldbjerg - Frontend developer',
    });

    if (this.routeData.attributes.featureImage) {
      this.metaService.updateTag({
        property: 'og:image',
        content:
          'https://muldbjerg.com/' + this.routeData.attributes.featureImage,
      });
    }
  }
}

export interface PostModel {
  attributes: {
    title: string;
    created: string;
    slug: string;
    excerpt: string;
    tags: string[];
    featureImage: string;
  };
  html: string;
}
