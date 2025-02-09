import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCoverageComponent } from './services-coverage.component';

describe('ServicesCoverageComponent', () => {
  let component: ServicesCoverageComponent;
  let fixture: ComponentFixture<ServicesCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCoverageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
