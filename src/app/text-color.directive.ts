import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})

export class TextColorDirective {

  @Input() color : string;


  constructor( private el: ElementRef) {

   this.el.nativeElement.style.color = 'black';


  }
  ngOnInit(){
  }

  @HostListener('mouseover') onmouseover (){
    console.log('over');
    this.el.nativeElement.style.color = this.color;
  }
  @HostListener('mouseleave') onmouseleave (){
    console.log('leave');
    this.el.nativeElement.style.color = 'black';
  }
}
