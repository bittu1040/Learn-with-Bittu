import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingQuestionsComponent } from './coding-questions.component';

describe('CodingQuestionsComponent', () => {
  let component: CodingQuestionsComponent;
  let fixture: ComponentFixture<CodingQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingQuestionsComponent]
    });
    fixture = TestBed.createComponent(CodingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
