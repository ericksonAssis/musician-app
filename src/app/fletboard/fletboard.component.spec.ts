import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FletboardComponent } from './fletboard.component';

describe('FletboardComponent', () => {
  let component: FletboardComponent;
  let fixture: ComponentFixture<FletboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FletboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FletboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
