import { TestBed } from '@angular/core/testing';

import { NgSwiperElementService } from './service/ng-swiper-element.service';

describe('NgSwiperElementService', () => {
  let service: NgSwiperElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSwiperElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
