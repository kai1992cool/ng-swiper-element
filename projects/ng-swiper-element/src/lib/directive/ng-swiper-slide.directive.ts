import { Directive, input } from '@angular/core';

@Directive({
  selector: '[ngSwiperSlide]',
  standalone: true,
})
export class NgSwiperSlideDirective {
  lazy = input<string | boolean | undefined>(false);
  autoplayDelay = input<number | undefined>(undefined);
  dataHistory = input<string | undefined>(undefined);
  dataHash = input<string | undefined>(undefined);
  constructor() { }

}
