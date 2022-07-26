import { TestBed } from '@angular/core/testing';

import { GetStudentsInfoService } from './get-students-info.service';

describe('GetStudentsInfoService', () => {
  let service: GetStudentsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudentsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
