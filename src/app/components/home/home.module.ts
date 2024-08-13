import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild([{ path: "", component: HomeComponent }])],
  exports: [],
})
export class HomeModule {}