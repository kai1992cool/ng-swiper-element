import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngSwiperButton]',
})
export class NgSwiperButtonDirective {
  @Input() next: string | boolean | undefined = false;
  @Input() prev: string | boolean | undefined = false;

  constructor() { }

}
