import { TestBed, inject } from '@angular/core/testing';

import { TestchatService } from './testchat.service';

describe('TestchatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestchatService]
    });
  });

  it('should be created', inject([TestchatService], (service: TestchatService) => {
    expect(service).toBeTruthy();
  }));
});
