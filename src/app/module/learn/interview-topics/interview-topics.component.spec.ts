import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTopicsComponent } from './interview-topics.component';

describe('InterviewTopicsComponent', () => {
  let component: InterviewTopicsComponent;
  let fixture: ComponentFixture<InterviewTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewTopicsComponent]
    });
    fixture = TestBed.createComponent(InterviewTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
