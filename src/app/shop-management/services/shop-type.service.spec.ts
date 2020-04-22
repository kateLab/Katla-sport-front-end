import { TestBed, inject } from '@angular/core/testing';

import { ShopTypeService } from './shop-type.service';

describe('ShopTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopTypeService]
    });
  });

  it('should be created', inject([ShopTypeService], (service: ShopTypeService) => {
    expect(service).toBeTruthy();
  }));
});
