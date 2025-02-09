import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristVisaComponent } from './tourist-visa.component';

describe('TouristVisaComponent', () => {
  let component: TouristVisaComponent;
  let fixture: ComponentFixture<TouristVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
