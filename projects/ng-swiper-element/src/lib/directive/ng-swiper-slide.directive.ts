import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngSwiperSlide]',
  standalone: true,
})
export class NgSwiperSlideDirective {
  @Input() lazy: string | boolean | undefined = false;
  @Input() autoplayDelay: number | undefined;
  @Input() dataHistory: string | undefined;
  @Input() dataHash: string | undefined;
  constructor() { }

}
