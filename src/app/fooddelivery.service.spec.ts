import { TestBed } from '@angular/core/testing';

import { FooddeliveryService } from './fooddelivery.service';

describe('FooddeliveryService', () => {
  let service: FooddeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooddeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
