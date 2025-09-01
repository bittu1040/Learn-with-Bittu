import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatTreeModule} from '@angular/material/tree';
import { AngularArticlesComponent } from './components/angular-articles/angular-articles.component';
import { JavascriptArticlesComponent } from './components/javascript-articles/javascript-articles.component';
import { SnippetsImageComponent } from './components/snippets-image/snippets-image.component';
import { InterviewPreparationComponent } from './components/interview-preparation/interview-preparation.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CodeSnippetComponent } from './reuse-components/code-snippet/code-snippet.component';
import { MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { CodeSnippetModule } from 'angular-code-snippet';  // from npm package/ node modules
import { MatSortModule } from '@angular/material/sort';
import { QuestionsTabComponent } from './components/interview-preparation/questions-tab/questions-tab.component';
import { InterviewSetsTabComponent } from './components/interview-preparation/interview-sets-tab/interview-sets-tab.component';
import { JavascriptCodingTabComponent } from './components/interview-preparation/javascript-coding-tab/javascript-coding-tab.component';
import { MediumArticlesTabComponent } from './components/interview-preparation/medium-articles-tab/medium-articles-tab.component';
// import { CodeSnippetModule } from 'code-snippet';          // from local package / project folder

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        PageNotFoundComponent,
        AngularArticlesComponent,
        JavascriptArticlesComponent,
        SnippetsImageComponent,
        InterviewPreparationComponent,
        BlogsComponent,
        QuestionsTabComponent,
        InterviewSetsTabComponent,
        JavascriptCodingTabComponent,
        MediumArticlesTabComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
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
        MatSelectModule,
        MatSortModule,
        CodeSnippetModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
