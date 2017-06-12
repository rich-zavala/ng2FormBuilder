import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldModel } from "../field-models/field.model";
import { FieldBuilderService } from "./field-builder.service";

@Component({
  selector: "app-form-builder",
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div *ngFor="let field of fields" class="form-row">
          <app-form-placer [field]="field" [form]="form"></app-form-placer>
        </div>
        <div class="form-row">
          <button type="submit" [disabled]="!form.valid">Save</button>
        </div>
      </form>
      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong><br>{{payLoad}}
      </div>
    </div>
  `,
  styleUrls: ["./form-builder.component.css"],
  providers: [FieldBuilderService]
})
export class FormBuilderComponent implements OnInit {

  @Input() fields: FieldModel<any>[] = [];
  form: FormGroup;
  payLoad = "";
  constructor(private qcs: FieldBuilderService) { }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
