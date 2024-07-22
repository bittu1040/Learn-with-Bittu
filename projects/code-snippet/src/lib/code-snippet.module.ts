import { NgModule } from '@angular/core';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { NgIf } from '@angular/common';



@NgModule({
  declarations: [
    CodeSnippetComponent
  ],
  imports: [
    NgIf
  ],
  exports: [
    CodeSnippetComponent
  ]
})
export class CodeSnippetModule { }
