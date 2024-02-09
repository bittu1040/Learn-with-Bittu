import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnOverviewComponent } from './learn-overview/learn-overview.component';
import { LearnJSComponent } from './learn-js/learn-js.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularInterviewQuestionsComponent } from './angular-interview-questions/angular-interview-questions.component';
import { JavascriptInterviewQuestionsComponent } from './javascript-interview-questions/javascript-interview-questions.component';
import { CommonWebInterviewQuestionsComponent } from './common-web-interview-questions/common-web-interview-questions.component';


@NgModule({
  declarations: [
    LearnOverviewComponent,
    LearnJSComponent,
    AngularInterviewQuestionsComponent,
    JavascriptInterviewQuestionsComponent,
    CommonWebInterviewQuestionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    LearnRoutingModule,
    MatDialogModule],
    providers:[MatDialog]
})
export class LearnModule { }
