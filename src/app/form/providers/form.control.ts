import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
// import { FieldModel } from "../field-models/field.model";
import { FormCategory } from "../providers/categories.provider";
import { FieldModel } from "app/form/field-models/field.model";
import { FieldDropdown } from "app/form/field-models/form.dropdown.model";
import { FieldTextbox } from "app/form/field-models/form.textbox.model";
import { FieldUtils } from "app/form/providers/field.utils";

export class FormControlGenerator {
  categoriesGroup = new FormGroup({});
  fieldsCollection: { [key: string]: FieldModel<any>[] } = {};
  constructor(private categories: FormCategory[]) {
    this.toFormGroup();

    console.group("Category & Field Groups");
    console.log("Categories", this.categoriesGroup);
    console.log("Fields", this.fieldsCollection);
    console.groupEnd();
  }

  private toFormGroup() {
    this.categories.forEach(category => {
      let categoryFormGroup = new FormGroup({});
      category.fieldsInfo.forEach((fieldInfo) => {
        let required = fieldInfo.field.required;
        let control = required ? new FormControl(fieldInfo.field.value || "", Validators.required) : new FormControl(fieldInfo.field.value || "");
        categoryFormGroup.addControl(fieldInfo.field.name, control);

        if (!this.fieldsCollection[category.source]) { // Generate field model from this field
          this.fieldsCollection[category.source] = [];
        }
        this.fieldsCollection[category.source].push(this.fieldModel(fieldInfo.field));
      });

      this.categoriesGroup.addControl(category.source, categoryFormGroup);

    });
  }

  private fieldModel(field: FieldModel<any>) {
    let helper = new FieldUtils();
    field.controlType = helper.getControlByType(field);
    let fieldObject: FieldModel<any>;
    switch (field.controlType) {
      case "FieldListBox":
        fieldObject = new FieldDropdown(field);
        break;
      default:
        fieldObject = new FieldTextbox(field);
        break;
    }
    return fieldObject;
  }
}
