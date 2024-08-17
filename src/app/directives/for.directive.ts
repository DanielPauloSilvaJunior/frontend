import { Directive, Input, input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnChanges {

  @Input("myForEm")
  numbers: number[] = [];


  constructor(
    private contairner: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnChanges(): void {
    for(let number of this.numbers) {
      this.contairner.createEmbeddedView(this.template, {$implicit: number})
    }
  }

  

}
