import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptCodingTabComponent } from './javascript-coding-tab.component';

describe('JavascriptCodingTabComponent', () => {
  let component: JavascriptCodingTabComponent;
  let fixture: ComponentFixture<JavascriptCodingTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptCodingTabComponent]
    });
    fixture = TestBed.createComponent(JavascriptCodingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
