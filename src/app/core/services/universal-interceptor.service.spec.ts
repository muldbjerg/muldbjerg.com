import { TestBed } from '@angular/core/testing';

import { UniversalInterceptorService } from './universal-interceptor.service';

describe('UniversalInterceptorService', () => {
  let service: UniversalInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversalInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
