import { TestBed } from '@angular/core/testing';

import { InventorymgtService } from './inventorymgt.service';

describe('InventorymgtService', () => {
  let service: InventorymgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorymgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
