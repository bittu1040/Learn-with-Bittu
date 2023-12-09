import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnOverviewComponent } from './learn-overview/learn-overview.component';
import { LearnJSComponent } from './learn-js/learn-js.component';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LearnOverviewComponent,
    LearnJSComponent,
    LearnAngularComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    LearnRoutingModule],
})
export class LearnModule { }
