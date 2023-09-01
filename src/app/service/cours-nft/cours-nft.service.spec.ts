import { TestBed } from '@angular/core/testing';

import { CoursNftService } from './cours-nft.service';

describe('CoursNftService', () => {
  let service: CoursNftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursNftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
