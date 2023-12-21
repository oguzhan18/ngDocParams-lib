import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDocsComponent } from './html-docs.component';

describe('HtmlDocsComponent', () => {
  let component: HtmlDocsComponent;
  let fixture: ComponentFixture<HtmlDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlDocsComponent]
    });
    fixture = TestBed.createComponent(HtmlDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
