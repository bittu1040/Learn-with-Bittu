import { NgModule } from "@angular/core";
import { CodingQuestionsComponent } from "./coding-questions.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CodingQuestionsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: "", component: CodingQuestionsComponent }])],
  exports: [],
})
export class CodingQuestionsModule {}