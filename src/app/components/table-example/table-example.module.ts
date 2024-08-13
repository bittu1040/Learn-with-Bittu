import { NgModule } from "@angular/core";
import { TableExampleComponent } from "./table-example.component";
import { MatTableModule } from "@angular/material/table";
import { ReuseModule } from "@app/reuse-components/reuse.module";

@NgModule({
    declarations: [TableExampleComponent],
    imports: [ReuseModule],
    exports: []
})
export class TableExampleModule{}