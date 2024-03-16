import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularArticlesComponent } from './angular-articles.component';

describe('AngularArticlesComponent', () => {
  let component: AngularArticlesComponent;
  let fixture: ComponentFixture<AngularArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularArticlesComponent]
    });
    fixture = TestBed.createComponent(AngularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
