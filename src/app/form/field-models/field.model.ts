export class FieldModel<T> {
  name: string;
  description: string;
  value: T;
  type: string;
  controlType: string;
  required: boolean;
  visible: boolean;

  taskField: any;

  constructor(options: {
    name?: string,
    description?: string,
    value?: T,
    type?: string,
    controlType?: string,
    required?: boolean,
    wi?: any
  } = {}) {
    this.name = options.name || "";
    this.description = options.description || "";
    this.value = options.value;
    this.type = options.type || "string";
    this.controlType = options.controlType || "";
    this.required = !!options.required;
    this.visible = options.wi && options.wi.visible ? options.wi.visible : true;
    this.taskField = options;
  }
}
