import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyVisaComponent } from './family-visa.component';

describe('FamilyVisaComponent', () => {
  let component: FamilyVisaComponent;
  let fixture: ComponentFixture<FamilyVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
