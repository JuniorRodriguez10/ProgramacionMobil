import { TestBed } from '@angular/core/testing';

import { CarShoppingServiceService } from './car-shopping-service.service';

describe('CarShoppingServiceService', () => {
  let service: CarShoppingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarShoppingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
