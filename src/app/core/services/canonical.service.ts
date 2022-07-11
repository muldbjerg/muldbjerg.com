import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom: any) {}

  setCanonicalLink(url?: string) {
    let canURL = url == undefined ? this.dom.URL : url;

    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement =
      this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', canURL);
  }
}
