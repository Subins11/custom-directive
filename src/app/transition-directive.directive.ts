import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransitionDirective]'
})
export class TransitionDirectiveDirective {

  constructor( private el:ElementRef) { 
    console.log(this.el)
  }

@HostListener('mouseenter') onMouseEnter(){
  this.imageTransform('scale(1.2)','5')
}
@HostListener('mouseleave') onMouseLeave(){
  this.imageTransform('','')
}

private imageTransform(transform:any, zIndex:any){
  this.el.nativeElement.style.transform= transform;
  this.el.nativeElement.style.transform= zIndex

}
}
