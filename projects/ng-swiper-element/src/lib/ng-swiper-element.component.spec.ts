import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperElementComponent } from './ng-swiper-element.component';

describe('SwiperElementComponent', () => {
  let component: SwiperElementComponent;
  let fixture: ComponentFixture<SwiperElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperElementComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SwiperElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
