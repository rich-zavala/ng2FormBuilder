// import { Injectable } from "@angular/core";
import { data } from "./mock";
import { FieldModel } from "../field-models/field.model";
import { FieldDropdown } from "../field-models/form.dropdown.model";
import { FieldTextbox } from "../field-models/form.textbox.model";
import { FieldProviderCommon } from "./field.provider.common";
import * as lodash from "lodash";

let common = new FieldProviderCommon();
// @Injectable()
export class FieldProvider {
  fields: FieldModel<any>[] = [];

  constructor() {
    // data.tabs.forEach(tab => {
    //   for (let i in tab.fields) {
    //     this.getType(tab.fields[i]);
    //   }
    // });
    // console.log(data);
    for (let i in data.tabs[1].fields) {
      // console.log(data.tabs[1].fields[i].field);
      this.setFieldTypes(data.tabs[1].fields[i].field);
    }
  }

  setFieldTypes(field: any) {
    field.controlType = (<any>common.getControlByType(field)).control;
    field.isVisible = field.wi && field.wi.visible || true;
    if (!field.wi || lodash.isUndefined(field.wi.visible) || (!lodash.isUndefined(field.wi.visible) && field.wi.visible)) {
      console.log(field);
      let fieldObject: FieldModel<any>;
      switch (field.controlType) {
        case "FieldListBox":
          fieldObject = new FieldDropdown(field);
          break;
        default:
          fieldObject = new FieldTextbox(field);
          break;
      }

      this.fields.push(fieldObject);
    } else {
      console.warn(field);
    }
  }


  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: FieldModel<any>[] = [
      new FieldDropdown({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      }),
      new FieldTextbox({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),
      new FieldTextbox({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      })
    ];
    // return questions.sort((a, b) => a.order - b.order);
    return questions;
  }
}
