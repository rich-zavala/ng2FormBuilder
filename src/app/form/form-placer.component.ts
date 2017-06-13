import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldModel } from "./field-models/field.model";
import { FormCategory } from "./providers/categories.provider";

@Component({
  selector: "app-form-placer",
  template: `
    <div [formGroup]="form">
      <label [attr.for]="field.name">{{field.name}}</label>
      <div [ngSwitch]="field.controlType">
        <input *ngSwitchCase="'textbox'" [formControlName]="field.name"
                [id]="field.name" [type]="field.type" [(ngModel)]="field.value">
        <select [id]="field.name" *ngSwitchCase="'dropdown'" [formControlName]="field.name" [(ngModel)]="field.taskField.value">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
        </select>
      </div> 
      <div class="errorMessage" *ngIf="!isValid">{{field.name}} is required</div>
    </div>
  `
})
export class FormPlacerComponent {
  @Input() category = <FormCategory>null;
  @Input() form: FormGroup;
  @Input() field: FieldModel<any>;

  ngOnInit() { }

  get isValid() {
    // return this.form.controls[this.field.name].valid;
    return true;
  }
}
