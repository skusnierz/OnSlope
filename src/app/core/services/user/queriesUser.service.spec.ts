/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueriesUserService } from './queriesUser.service';

describe('Service: QueriesUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueriesUserService]
    });
  });

  it('should ...', inject([QueriesUserService], (service: QueriesUserService) => {
    expect(service).toBeTruthy();
  }));
});
