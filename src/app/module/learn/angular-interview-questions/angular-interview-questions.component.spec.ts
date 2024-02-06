import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInterviewQuestionsComponent } from './angular-interview-questions.component';

describe('AngularInterviewQuestionsComponent', () => {
  let component: AngularInterviewQuestionsComponent;
  let fixture: ComponentFixture<AngularInterviewQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularInterviewQuestionsComponent]
    });
    fixture = TestBed.createComponent(AngularInterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
