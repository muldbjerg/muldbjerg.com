import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CanonicalService } from './core/services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'muldbjerg.com';

  constructor(private router: Router, private canonical: CanonicalService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.canonical.setCanonicalLink();
      }
    });
  }

  ngOnInit() {}
}
