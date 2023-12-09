import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOverviewComponent } from './learn-overview.component';

describe('LearnOverviewComponent', () => {
  let component: LearnOverviewComponent;
  let fixture: ComponentFixture<LearnOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnOverviewComponent]
    });
    fixture = TestBed.createComponent(LearnOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
