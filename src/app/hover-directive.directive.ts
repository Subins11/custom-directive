import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor( private el:ElementRef) {
console.log(this.el)
   }

@HostListener('mouseenter') onMouseEnter(){
  this.hoverButton('blue')
}
@HostListener('mouseleave') onMouseLeave(){
  this.hoverButton('')
}

private hoverButton(color:string){
  this.el.nativeElement.style.backgroundColor = color
}

}
