import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisaComponent } from './work-visa.component';

describe('WorkVisaComponent', () => {
  let component: WorkVisaComponent;
  let fixture: ComponentFixture<WorkVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
