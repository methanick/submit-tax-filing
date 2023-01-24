import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFilingFormComponent } from './tax-filing-form.component';

describe('TaxFilingFormComponent', () => {
  let component: TaxFilingFormComponent;
  let fixture: ComponentFixture<TaxFilingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFilingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFilingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
