import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonWebInterviewQuestionsComponent } from './common-web-interview-questions.component';

describe('CommonWebInterviewQuestionsComponent', () => {
  let component: CommonWebInterviewQuestionsComponent;
  let fixture: ComponentFixture<CommonWebInterviewQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonWebInterviewQuestionsComponent]
    });
    fixture = TestBed.createComponent(CommonWebInterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
