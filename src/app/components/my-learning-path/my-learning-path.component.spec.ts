import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningPathComponent } from './my-learning-path.component';

describe('MyLearningPathComponent', () => {
  let component: MyLearningPathComponent;
  let fixture: ComponentFixture<MyLearningPathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLearningPathComponent]
    });
    fixture = TestBed.createComponent(MyLearningPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
