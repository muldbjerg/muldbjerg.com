import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
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

  @HostListener('mousemove', ['$event']) onMouseOver(event: any) {
    var customOffsetX = 50,
      customOffsetY = 40,
      x = (event.pageX - window.innerWidth) / 20 + customOffsetX,
      y = (event.pageY - window.innerHeight) / 20 + customOffsetY;

    this.imgTransform = {
      transform: 'translateX(' + x + 'px) translateY(' + y + 'px)',
    };
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
    this.imgTransform = {
      transform: 'translateX(0px) translateY(0px)',
    };
  }
}
