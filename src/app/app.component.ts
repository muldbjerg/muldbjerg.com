import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { CanonicalService } from './core/services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'muldbjerg.com';

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private canonical: CanonicalService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.canonical.setCanonicalLink();
      }
    });
  }

  ngOnInit() {
    this.title.setTitle(' Here is your title to display heading ');
    this.meta.updateTag({
      name: 'description',
      content: ' here is your description',
    });

    this.meta.updateTag({ name: 'url', content: 'here is your Page url' });
    this.meta.updateTag({
      property: 'og:Title',
      content: ' Here is your title to display heading ',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: ' here is your description',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'here is your Page url ',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'twitter:title',
      content: ' Here is your title to display heading ',
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content: ' here is your description',
    });
    this.meta.updateTag({
      property: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'og:image', content: 'image_URL ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'image_URL ' });
  }

  onActivate(event: any) {
    console.log('hallo');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
