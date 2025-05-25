import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonicFieldComponent } from './harmonic-field.component';

describe('HarmonicFieldComponent', () => {
  let component: HarmonicFieldComponent;
  let fixture: ComponentFixture<HarmonicFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarmonicFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonicFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
