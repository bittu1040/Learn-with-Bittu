import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArticlesComponent } from './javascript-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DataSharingService } from '@app/shared/data-sharing.service';
import { CodeSnippetComponent } from 'angular-code-snippet';

describe('JavascriptArticlesComponent', () => {
  let component: JavascriptArticlesComponent;
  let fixture: ComponentFixture<JavascriptArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule, MatToolbarModule, MatIconModule, MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTreeModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSelectModule, MatSidenavModule, BrowserAnimationsModule
      ],
      providers:[DataSharingService],
      declarations: [JavascriptArticlesComponent, CodeSnippetComponent]
    });
    fixture = TestBed.createComponent(JavascriptArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
