import { TestBed } from '@angular/core/testing';

import { CasassrvService } from './casassrv.service';

describe('CasassrvService', () => {
  let service: CasassrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasassrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
