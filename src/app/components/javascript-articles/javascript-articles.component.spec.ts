import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArticlesComponent } from './javascript-articles.component';

describe('JavascriptArticlesComponent', () => {
  let component: JavascriptArticlesComponent;
  let fixture: ComponentFixture<JavascriptArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptArticlesComponent]
    });
    fixture = TestBed.createComponent(JavascriptArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
