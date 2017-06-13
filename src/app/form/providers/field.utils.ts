// import { Injectable } from "@angular/core";
import { TASK_ATTRIBUTE_TYPE } from "./constants";
import * as lodash from "lodash";

// @Injectable()
export class FieldUtils {
  directions = {
    output: "output",
    input: "input"
  };

  getParameterDirections() {
    return this.directions;
  }

  getStructureFromAttributes(structure: string, attributes: any) {
    let returnValue = lodash.get(attributes, structure, []);

    return this._getArray(returnValue);
  }

  _getArray(obj: any) {
    if (!Array.isArray(obj)) {
      return [];
    }

    return obj;
  }

  _mapTypeToConstant(type: string | TASK_ATTRIBUTE_TYPE): TASK_ATTRIBUTE_TYPE {
    switch (type) {
      case "string":
      case TASK_ATTRIBUTE_TYPE.STRING:
        return TASK_ATTRIBUTE_TYPE.STRING;

      case "password":
      case TASK_ATTRIBUTE_TYPE.PASSWORD:
        return TASK_ATTRIBUTE_TYPE.PASSWORD;

      case "number":
      case "integer":
      case TASK_ATTRIBUTE_TYPE.NUMBER:
      case TASK_ATTRIBUTE_TYPE.INTEGER:
        return TASK_ATTRIBUTE_TYPE.NUMBER;

      case "boolean":
      case TASK_ATTRIBUTE_TYPE.BOOLEAN:
        return TASK_ATTRIBUTE_TYPE.BOOLEAN;

      case "object":
      case TASK_ATTRIBUTE_TYPE.OBJECT:
        return TASK_ATTRIBUTE_TYPE.OBJECT;

      case "map":
      case "params":
      case TASK_ATTRIBUTE_TYPE.PARAMS:
        return TASK_ATTRIBUTE_TYPE.PARAMS;

      case "any":
      case TASK_ATTRIBUTE_TYPE.ANY:
        return TASK_ATTRIBUTE_TYPE.ANY;

      case "complex_object":
        return TASK_ATTRIBUTE_TYPE.COMPLEX_OBJECT;

      case "schema":
        return TASK_ATTRIBUTE_TYPE.SCHEMA;

      case "file":
        return TASK_ATTRIBUTE_TYPE.FILE;

      default:
        return TASK_ATTRIBUTE_TYPE.STRING;
    }
  }

  getControlByType(item: any, paramDirection?: string) {
    let control = "";
    try {

      let typeAsConstant: TASK_ATTRIBUTE_TYPE = this._mapTypeToConstant(item.type);

      switch (typeAsConstant) {
        case TASK_ATTRIBUTE_TYPE.STRING:
          control = "FieldTextBox";
          break;

        case TASK_ATTRIBUTE_TYPE.PASSWORD:
          control = "FieldPassword";
          break;

        case TASK_ATTRIBUTE_TYPE.NUMBER:
        case TASK_ATTRIBUTE_TYPE.INTEGER:
          control = "FieldNumber";
          break;

        case TASK_ATTRIBUTE_TYPE.BOOLEAN:
          control = "FieldRadio";
          break;

        case TASK_ATTRIBUTE_TYPE.PARAMS:
          control = "FieldTextArea";
          break;

        case TASK_ATTRIBUTE_TYPE.ANY:
        case TASK_ATTRIBUTE_TYPE.OBJECT:
          if (item.relatedTo) {
            control = "FieldSchema";
          } else {
            control = "FieldObject";
          }
          break;

        case TASK_ATTRIBUTE_TYPE.COMPLEX_OBJECT:
          control = "FieldSchema";
          break;

        case TASK_ATTRIBUTE_TYPE.SCHEMA:
          control = "FieldGrid";
          break;

        case TASK_ATTRIBUTE_TYPE.FILE:
          control = "FieldFile";
          break;

        default:
          control = "FieldTextBox";
          break;
      }

      if (paramDirection === this.directions.output && item.type === TASK_ATTRIBUTE_TYPE.STRING) {
        control = "FieldObject";
      }

      if (item.allowed) { control = "FieldListBox"; }

      return control;
    } catch (e) {
      return "FieldTextBox";
    }
  }
}
