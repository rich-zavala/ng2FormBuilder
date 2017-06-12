import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormBuilderService } from './form-builder/form-builder.service';
import { FormPlacerComponent } from './form-placer/form-placer.component';
import { FormService } from './form.service';

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
  providers: [FormBuilderService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
