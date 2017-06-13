import { FieldModel } from "./field.model";
export class FieldDropdown extends FieldModel<string> {
  controlType = "dropdown";
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);

    if (options["allowed"]) {
      options["allowed"].forEach((allowedValue) => {
        this.options.push({
          key: allowedValue,
          value: allowedValue
        });
      });
    }
  }
}
