import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnOverviewComponent } from './learn-overview/learn-overview.component';
import { LearnJSComponent } from './learn-js/learn-js.component';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DialogContentComponent } from 'app/components/dialog-content/dialog-content.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InterviewTopicsComponent } from './interview-topics/interview-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LearnOverviewComponent,
    LearnJSComponent,
    LearnAngularComponent,DialogContentComponent, InterviewTopicsComponent
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
