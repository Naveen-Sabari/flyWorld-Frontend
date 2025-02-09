import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVisaComponent } from './student-visa.component';

describe('StudentVisaComponent', () => {
  let component: StudentVisaComponent;
  let fixture: ComponentFixture<StudentVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
