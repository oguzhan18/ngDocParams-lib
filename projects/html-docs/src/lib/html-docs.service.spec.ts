import { TestBed } from '@angular/core/testing';

import { HtmlDocsService } from './html-docs.service';

describe('HtmlDocsService', () => {
  let service: HtmlDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
