import { TestBed } from '@angular/core/testing';

import { DataSharingService } from './data-sharing.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DataSharingService', () => {
  let service: DataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(DataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
