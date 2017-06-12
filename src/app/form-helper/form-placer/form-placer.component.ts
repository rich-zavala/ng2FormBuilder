import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldModel } from "../field-models/field.model";

@Component({
  selector: "app-form-placer",
  template: `
    <div [formGroup]="form">
      <label [attr.for]="field.key">{{field.name}}</label>
      <div [ngSwitch]="field.controlType">{{field.label}}
        <input *ngSwitchCase="'textbox'" [formControlName]="field.key"
                [id]="field.key" [type]="field.type">
        <select [id]="field.key" *ngSwitchCase="'dropdown'" [formControlName]="field.key">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
        </select>
      </div> 
      <div class="errorMessage" *ngIf="!isValid">{{field.name}} is required</div>
    </div>
  `,
  styleUrls: ["./form-placer.component.css"]
})
export class FormPlacerComponent {
  @Input() field: FieldModel<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
