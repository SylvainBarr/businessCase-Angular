import { TestBed } from '@angular/core/testing';

import { CoursEthService } from './cours-eth.service';

describe('CoursEthService', () => {
  let service: CoursEthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursEthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
