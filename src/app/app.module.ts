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
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MyLearningPathComponent } from './components/my-learning-path/my-learning-path.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatTreeModule} from '@angular/material/tree';
import { LearnModule } from './module/learn/learn.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    MyLearningPathComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
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
    MatTreeModule,
    LearnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
