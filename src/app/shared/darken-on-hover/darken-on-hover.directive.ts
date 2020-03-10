import { Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';

@Directive({

  selector: '[aDarkenOnHover]'

})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor
    (
    private el: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('mouseover') // Esse decorator habilita o uso o evento do elemento host
  DarkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);// Efeito de escurecer a foto quando for passado o mause
  }

  @HostListener('mouseleave')
  DarkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }


}
