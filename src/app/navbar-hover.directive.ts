import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarHover]'
})
export class NavbarHoverDirective {

  constructor( private el:ElementRef) { 

    console.log(this.el)
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.navHover('white')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.navHover('')
  }

  private navHover(color:string){
    this.el.nativeElement.style.color= color
  }
}
