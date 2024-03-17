import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsImageComponent } from './snippets-image.component';

describe('SnippetsImageComponent', () => {
  let component: SnippetsImageComponent;
  let fixture: ComponentFixture<SnippetsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnippetsImageComponent]
    });
    fixture = TestBed.createComponent(SnippetsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
