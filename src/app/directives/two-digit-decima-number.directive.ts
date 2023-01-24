import { Directive, ElementRef, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[appTwoDigitDecimal]',
  providers:[DecimalPipe]
})
export class TwoDigitDecimalNumberDirective implements OnInit {

  constructor(private el: ElementRef, private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.el.nativeElement.onkeypress = (evt:any) => {
      let currentValue = this.el.nativeElement.value;
      let cursorPosition = this.el.nativeElement.selectionStart;
      let decimalCount = currentValue.substring(cursorPosition).split(".")[1];
      if (decimalCount && decimalCount.length === 2) {
        evt.preventDefault();
      }
    };
  }
}