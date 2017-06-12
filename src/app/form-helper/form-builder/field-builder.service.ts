import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FieldModel } from "../field-models/field.model";

@Injectable()
export class FieldBuilderService {
  constructor() { }

  toFormGroup(tasks: FieldModel<any>[]) {
    let group: any = {};

    tasks.forEach(task => {
      group[task.key] = task.required ? new FormControl(task.value || "", Validators.required)
        : new FormControl(task.value || "");
    });

    return new FormGroup(group);
  }
}
