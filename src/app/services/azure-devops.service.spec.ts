/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AzureDevopsService } from './azure-devops.service';

describe('Service: AzureDevops', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureDevopsService]
    });
  });

  it('should ...', inject([AzureDevopsService], (service: AzureDevopsService) => {
    expect(service).toBeTruthy();
  }));
});
