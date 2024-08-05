import { TestBed } from '@angular/core/testing';

import { DataSharingService } from './data-sharing.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataSharingService', () => {
  let service: DataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(DataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
