import * as lodash from "lodash";

export interface FormCategoryFields {
  direction: string;
  field: any;
  source: string;
  taskSource: string;
}

export interface FormCategory {
  title: string;
  source: string;
  dynamicTab: boolean;
  fieldsInfo: FormCategoryFields[];
}

const TAB_TYPES_CATALOG = {
  add: {
    title: "Add",
    attribute: "add",
    selector: "task-add"
  },
  configuration: {
    title: "Configurations",
    attribute: "configuration",
    selector: "task-properties-form"
  },
  inputs: {
    title: "Inputs",
    attribute: "inputs",
    selector: "task-properties-input"
  },
  outputs: {
    title: "Outputs",
    attribute: "outputs",
    selector: "task-properties-output"
  }
};

const TASK_TYPE_CATEGORIES = {
  "0": [TAB_TYPES_CATALOG.configuration, TAB_TYPES_CATALOG.outputs],
  "1": [TAB_TYPES_CATALOG.configuration, TAB_TYPES_CATALOG.inputs, TAB_TYPES_CATALOG.outputs]
};

export class CategoriesProvider {
  categories: FormCategory[] = [];

  constructor(private task: any) { // Cambiar tipeo a TASK MODEL
    this.generateCategories();
  }

  private generateCategories() {
    let customSections = false;
    // this.flowPropertiesTabsInit();
    let catCollection = [];

    if (this.task.wi && this.task.wi.sections) {
      customSections = true;

      // Place sections
      for (let i in this.task.wi.sections) {
        catCollection.push({
          dynamicTab: true,
          title: this.task.wi.sections[i],
          attribute: lodash.toLower(this.task.wi.sections[i]),
          fields: []
        });
      }

      let fieldSectionsCollection = [];
      if (!(<any>this.task).inputs) {
        fieldSectionsCollection.push({
          name: "inputs",
          direction: "inputs",
          fields: this.task.attributes.inputs
        });
      }
      if (!(<any>this.task).outputs) {
        fieldSectionsCollection.push({
          name: "outputs",
          direction: "outputs",
          fields: this.task.attributes.outputs
        });
      }

      for (let taskAttr in this.task) {
        if (lodash.isArray(this.task[taskAttr]) || taskAttr === "endpoint") { // Is section
          let direction = "settings";
          let fields;

          if (taskAttr === "endpoint") {
            fields = this.task.endpoint.settings;
            direction = "endpointSettings";
          } else {
            fields = this.task[taskAttr];
            if (taskAttr.indexOf("inputs") >= 0 || taskAttr === "Output Settings") {
              direction = "inputs";
            }
            if (taskAttr === "outputs" || taskAttr === "output") {
              direction = "outputs";
            }
          }

          fieldSectionsCollection.push({
            name: taskAttr,
            direction: direction,
            fields: fields
          });
        }
      }

      for (let i in this.task.wi.sections) {
        let section = this.task.wi.sections[i];
        for (let fieldSectionIndex in fieldSectionsCollection) {
          catCollection = this.identifySection(section, fieldSectionsCollection[fieldSectionIndex], catCollection);
        }
      }
    } else {
      catCollection = TASK_TYPE_CATEGORIES[this.task.type];
    }

    catCollection.forEach((cat) => {

      // Configuarations tab --  don't show if there is no visible item in that tab
      if (cat.attribute === "configuration") {
        let status = false;
        // Check for configuration tab existence
        if (this.task.endpoint && this.task.endpoint.settings && this.task.endpoint.settings.length > 0) {
          let values = this.task.endpoint.settings;
          for (let index = 0; index < values.length; index++) {
            if (!values[index]["wi"] || values[index]["wi"].visible !== false) {
              let category = this.tabInfoGen(cat);
              this.categories.push(category);
              status = true;
              break;
            }
          }
        }

        if (this.task && this.task.settings && this.task.settings.length > 0 && !status) {
          let values = this.task.settings;
          for (let index = 0; index < values.length; index++) {
            if (!values[index]["wi"] || values[index]["wi"].visible !== false) {
              let category = this.tabInfoGen(cat);
              this.categories.push(category);
              break;
            }
          }
        }
      } else {
        if (customSections || (!lodash.isUndefined(this.task.attributes) && lodash.values(this.task.attributes[cat.attribute]).length > 0)) {
          let category = this.tabInfoGen(cat);
          this.categories.push(category);
        }
      }
    });

    return this;
  }

  private identifySection(section: string, fieldsData: { name: string, direction: string, fields: any[] }, categories: any[]) {
    for (let fieldIndex in fieldsData.fields) {
      let field = fieldsData.fields[fieldIndex];

      if (lodash.includes(field.tags, section)) {
        let fieldInfo = {
          field: field,
          direction: fieldsData.direction,
          taskSource: fieldsData.name,
          source: section
        };
        let tabIndex = lodash.findIndex(categories, (o) => o.title === section);
        categories[tabIndex].fields.push(fieldInfo);
      }
    }
    return categories;
  };

  private tabInfoGen(category: any): FormCategory {
    return {
      dynamicTab: category.dynamicTab || false,
      title: category.title,
      source: category.attribute,
      fieldsInfo: category.fields || []
    };
  }
}
