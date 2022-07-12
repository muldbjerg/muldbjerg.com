import { Injectable } from '@angular/core';
import {
  Asset,
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulApiService {
  private clientApi: ContentfulClientApi;

  constructor() {
    this.clientApi = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
    });
  }

  /**
   * Get a single blog post by its slug
   *
   * @param slug The slug for the blog post
   */
  getBlogPost(slug: string): Promise<Entry<BlogPost>> {
    return this.getBlogPosts({
      'fields.slug': slug,
    }).then((response) => response.items[0]);
  }

  /**
   * Get listing of all blog posts
   *
   * @param query Filter object
   */
  getBlogPosts(query?: object): Promise<EntryCollection<BlogPost>> {
    return this.clientApi.getEntries<BlogPost>(
      Object.assign({}, query, { content_type: 'blogPost' })
    );
  }
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: Asset;
  keywords: Array<string>;
}
