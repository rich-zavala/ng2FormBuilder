export class FieldModel<T> {
  value: T;
  key: string;
  name: string;
  description: string;
  required: boolean;
  type: string;
  controlType: string;
  constructor(options: {
    value?: T,
    key?: string,
    name?: string,
    description?: string,
    required?: boolean,
    type?: string,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || options.name || "";
    this.name = options.name || "";
    this.description = options.description || "";
    this.required = !!options.required;
    this.type = options.type || "string";
    this.controlType = options.controlType || "";
  }
}
