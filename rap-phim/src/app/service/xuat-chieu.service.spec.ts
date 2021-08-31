import { TestBed } from '@angular/core/testing';

import { XuatChieuService } from './xuat-chieu.service';

describe('XuatChieuService', () => {
  let service: XuatChieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XuatChieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
