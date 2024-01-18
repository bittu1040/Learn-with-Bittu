import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDescriptionComponent } from './topic-description.component';

describe('TopicDescriptionComponent', () => {
  let component: TopicDescriptionComponent;
  let fixture: ComponentFixture<TopicDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicDescriptionComponent]
    });
    fixture = TestBed.createComponent(TopicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
