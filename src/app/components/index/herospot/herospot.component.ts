import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-herospot',
  templateUrl: './herospot.component.html',
  styleUrls: ['./herospot.component.scss'],
})
export class HerospotComponent {
  imgTransform = {
    transform: 'translateX(0px) translateY(0px)',
  };

  private unlistener: any[] = [];
  imgOpacity = {};
  isSafari: boolean | string = false;
  isTouchDevice = false;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    this.isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1;

    // Change graphic if touch device
    if (this.isTouchDevice) {
      this.imgOpacity = {
        opacity: '0',
      };
    }

    // Detect mouse movement when mouse over
    this.unlistener.push(
      this.renderer2.listen('document', 'mousemove', (event) => {
        if (!this.isTouchDevice) {
          var customOffsetX = 50,
            customOffsetY = 40,
            x = (event.pageX - window.innerWidth) / 20 + customOffsetX,
            y = (event.pageY - window.innerHeight) / 20 + customOffsetY;

          this.imgTransform = {
            transform: 'translateX(' + x + 'px) translateY(' + y + 'px)',
          };
        }
      })
    );

    // Detect when mouse leaves - reset animation
    this.unlistener.push(
      this.elementRef.nativeElement
        .querySelector('.herospot-container')
        .addEventListener('mouseleave', (event: MouseEvent) => {
          if (!this.isTouchDevice) {
            this.imgTransform = {
              transform: 'translateX(0px) translateY(0px)',
            };
          }
        })
    );

    // Detect scroll for touch devices
    this.unlistener.push(
      this.renderer2.listen('window', 'onscroll', (event) => {
        if (this.isTouchDevice) {
          this.imgOpacity = {
            opacity: window.scrollY / 75,
          };
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.unlistener = [];
  }
}
