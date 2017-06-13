import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlGenerator } from "./providers/form.control";
import { FormCategory } from "./providers/categories.provider";
import { FieldModel } from "app/form/field-models/field.model";

import * as lodash from "lodash";

@Component({
  selector: "app-form-builder",
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div *ngFor="let category of categories" class="form-row">
          <h3>{{category.title}}</h3>
          <div *ngFor="let field of fields[category.source]" [hidden]="!field.visible" style="border-bottom: 1px solid">
            <table width="100%">
              <tr>
                <td width="50%" valign="top">
                  <app-form-placer [category]="category" [form]="form.controls[category.source]" [field]="field"></app-form-placer>
                </td>
                <td width="50%" >
                  <pre>{{field | json}}</pre>
                </td>
              </tr>
            </table>
          </div>
          <br>
          <br>
        </div>
        <div class="form-row">
          <!--<button type="submit" [disabled]="!form.valid">Save</button>-->
          <button type="submit">Save</button>
        </div>
      </form>
      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong>
        <pre>{{payLoad | json}}</pre>
      </div>
    </div>
  `
})
export class FormBuilderComponent implements OnInit {
  JSON = JSON;

  @Input() categories: FormCategory[] = [];
  form: FormGroup;
  fields: any;
  payLoad = "";
  private formGenerator: FormControlGenerator;

  constructor() { }

  ngOnInit() {
    this.formGenerator = new FormControlGenerator(this.categories);
    this.form = this.formGenerator.categoriesGroup;
    this.fields = this.formGenerator.fieldsCollection;
  }
  onSubmit() {
    this.payLoad = this.form.value;
  }
}
