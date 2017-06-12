import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { FormBuilderComponent } from "./form-helper/form-builder/form-builder.component";
import { FieldBuilderService } from "./form-helper/form-builder/field-builder.service";
import { FormPlacerComponent } from "./form-helper/form-placer/form-placer.component";
// import { FormService } from "./form-helper/form-builder/form-builder.service";

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormPlacerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // HttpModule
  ],
  providers: [FieldBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
