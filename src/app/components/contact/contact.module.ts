import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatCardModule, RouterModule.forChild([{ path: "", component: ContactComponent }])],
  exports: [],
})
export class ContactModule {}