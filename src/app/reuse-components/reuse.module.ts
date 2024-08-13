import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CodeSnippetComponent, TableComponent],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    CommonModule,
    FormsModule,
    // RouterModule.forChild([{ path: '', component: TableComponent }]),
  ],
  exports: [TableComponent, CodeSnippetComponent],
})
export class ReuseModule {}
