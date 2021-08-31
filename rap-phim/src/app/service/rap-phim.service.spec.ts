import { TestBed } from '@angular/core/testing';

import { RapPhimService } from './rap-phim.service';

describe('RapPhimService', () => {
  let service: RapPhimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapPhimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
