import { Directive, input } from '@angular/core';

@Directive({
  selector: '[ngSwiperSlide]'
})
export class NgSwiperSlideDirective {
  lazy = input<string | boolean | undefined>(false);
  constructor() { }

}
