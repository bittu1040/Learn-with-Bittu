import { NgModule } from '@angular/core';
import { JavascriptArticlesComponent } from './javascript-articles.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ReuseModule } from '@app/reuse-components/reuse.module';

@NgModule({
  declarations: [JavascriptArticlesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    RouterModule.forChild([
      { path: '', component: JavascriptArticlesComponent, pathMatch: 'full' },
      { path: ':topic', component: JavascriptArticlesComponent },
    ]),
    ReuseModule,
  ],
  exports: [],
})
export class JavascriptArticlesModule {}
