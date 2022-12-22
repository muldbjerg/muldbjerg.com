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
    private metaService: Meta,
    private canonical: CanonicalService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.canonical.setCanonicalLink();
      }
    });
  }

  ngOnInit() {
    this.title.setTitle('Steffen Muldbjerg - Frontend developer');
    this.metaService.updateTag({
      property: 'og:description',
      name: 'description',
      content: '',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Steffen Muldbjerg - Frontend developer',
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://muldbjerg.com/assets/images/Portrait.webp',
    });

    this.metaService.updateTag({
      property: 'twitter:card',
      content: 'summary_large_image',
    });
  }
}
