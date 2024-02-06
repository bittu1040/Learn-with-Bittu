import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptInterviewQuestionsComponent } from './javascript-interview-questions.component';

describe('JavascriptInterviewQuestionsComponent', () => {
  let component: JavascriptInterviewQuestionsComponent;
  let fixture: ComponentFixture<JavascriptInterviewQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptInterviewQuestionsComponent]
    });
    fixture = TestBed.createComponent(JavascriptInterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
