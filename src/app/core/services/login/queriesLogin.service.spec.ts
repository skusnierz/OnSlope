/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueriesLoginService } from './queriesLogin.service';

describe('Service: QueriesLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueriesLoginService]
    });
  });

  it('should ...', inject([QueriesLoginService], (service: QueriesLoginService) => {
    expect(service).toBeTruthy();
  }));
});
