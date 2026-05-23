import { Directive, input } from '@angular/core';

@Directive({
  selector: '[ngSwiperButton]'
})
export class NgSwiperButtonDirective {
  next = input<string | boolean | undefined>(false);
  prev = input<string | boolean | undefined>(false);

  constructor() { }

}
