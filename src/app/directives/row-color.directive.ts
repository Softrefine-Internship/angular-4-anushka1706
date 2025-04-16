import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRowColor]'
})
export class RowColorDirective implements OnChanges {
  @Input() index!: number;

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.backgroundColor = this.index % 2 === 0 ? '#e7f5ff' : '#a5d8ff';
  }
}
