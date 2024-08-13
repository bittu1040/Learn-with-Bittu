import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogsComponent } from "./blogs.component";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: BlogsComponent }]),
  ],
  exports: [],
})
export class BlogsModule {}