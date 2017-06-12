import { FieldModel } from "./field.model";
export class FieldTextbox extends FieldModel<string> {
  controlType = "textbox";
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options["type"] || "";
  }
}
