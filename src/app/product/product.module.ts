import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";


@NgModule({
    declarations: [ProductComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: ProductComponent },
      ])
    ],
    exports:[ProductComponent],
    // schemas: [
    //     NO_ERRORS_SCHEMA
    //   ]
  })
  export class ProductModule {}