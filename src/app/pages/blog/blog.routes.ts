import { Route, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent, PostModel } from './post/post.component';

export const posts: Routes = [];

function importAll(r: any) {
  r.keys().forEach((key: string) => {
    const postData: PostModel = r(key);

    const route: Route = {
      path: postData.attributes.slug,
      component: PostComponent,
      data: postData,
    };

    posts.push(route);
  });
}

importAll(
  (require as any).context(
    'frontmatter-markdown-loader!./blog-content/',
    true,
    /^\.\/.+\.md$/
  )
);

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [{ path: '', component: FeedComponent }, ...posts],
  },
];
