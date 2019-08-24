import { TestBed } from '@angular/core/testing';

import { CustomersfunService } from './customersfun.service';

describe('CustomersfunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersfunService = TestBed.get(CustomersfunService);
    expect(service).toBeTruthy();
  });
});
