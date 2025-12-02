import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippetComponent } from './code-snippet.component';

describe('CodeSnippetComponent', () => {
  let component: CodeSnippetComponent;
  let fixture: ComponentFixture<CodeSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [CodeSnippetComponent]
});
    fixture = TestBed.createComponent(CodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
