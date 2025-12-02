import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumArticlesTabComponent } from './medium-articles-tab.component';

describe('MediumArticlesTabComponent', () => {
  let component: MediumArticlesTabComponent;
  let fixture: ComponentFixture<MediumArticlesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MediumArticlesTabComponent]
});
    fixture = TestBed.createComponent(MediumArticlesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
