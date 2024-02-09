import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnOverviewComponent } from './learn-overview/learn-overview.component';
import { LearnJSComponent } from './learn-js/learn-js.component';

const routes: Routes = [
  {path:"overview", component: LearnOverviewComponent},
  {path:"learn-JS", component: LearnJSComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
