import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSetsTabComponent } from './interview-sets-tab.component';

describe('InterviewSetsTabComponent', () => {
  let component: InterviewSetsTabComponent;
  let fixture: ComponentFixture<InterviewSetsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [InterviewSetsTabComponent]
});
    fixture = TestBed.createComponent(InterviewSetsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
