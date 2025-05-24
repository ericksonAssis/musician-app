import { TestBed } from '@angular/core/testing';

import { ChordService } from './chord.service';

describe('ChordServiceService', () => {
  let service: ChordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
