import { NgModule } from '@angular/core';
import { AngularArticlesComponent } from './angular-articles.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AngularArticlesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    RouterModule.forChild([
      { path: '', component: AngularArticlesComponent },
      { path: ':topic', component: AngularArticlesComponent },
    ]),
  ],
  exports: [],
})
export class AngularArticlesModule {}
