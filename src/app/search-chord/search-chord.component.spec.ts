import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChordComponent } from './search-chord.component';

describe('SearchChordComponent', () => {
  let component: SearchChordComponent;
  let fixture: ComponentFixture<SearchChordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchChordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchChordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
