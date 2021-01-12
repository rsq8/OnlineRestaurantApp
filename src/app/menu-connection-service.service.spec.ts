import { TestBed } from '@angular/core/testing';

import { MenuConnectionServiceService } from './menu-connection-service.service';

describe('MenuConnectionServiceService', () => {
  let service: MenuConnectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuConnectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
