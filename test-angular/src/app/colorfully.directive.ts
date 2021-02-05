import { Directive, ElementRef, HostListener, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[colorMe]'
})
export class ColorfullyDirective implements OnInit, OnChanges {
  @HostBinding('style.backgroundColor') backGroundColor : string
  @Input() color:string; //bind avec le template

  constructor(private elementRef: ElementRef, private renderer : Renderer2) {  //référence à l'élélement
    console.log(elementRef); //affiche les attributs habituels d'un élément
  }
  ngOnChanges(change : SimpleChanges){
    console.log(change); //a détecté qu'il y avaitun @Input
  }
  ngOnInit(){
    // this.elementRef.nativeElement.style.backgroundColor = '#eb7a34' ;
  }

  @HostListener('mouseenter') onmouseEnter(event : Event){
     this.elementRef.nativeElement.style.backgroundColor = '#eb7a34' ;
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.color)
    // this.backGroundColor = this.color;
  }

  @HostListener('mouseleave') onmouseLeave(event : Event){
    this.elementRef.nativeElement.style.backgroundColor = 'transparent' ;
    // this.backGroundColor = 'transparent';
  }
}
