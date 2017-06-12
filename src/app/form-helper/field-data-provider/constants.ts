/**
 * Enumerations
 */

export enum FLOW_DIAGRAM_NODE_TYPE {
  NODE_PADDING,   // 0 padding node
  NODE_HOLDER,    // 1 placeholder node
  NODE_ADD,       // 2 node to add an activity
  NODE_ROOT,      // 3 the trigger node
  NODE_ROOT_NEW,  // 4 node to add a trigger
  NODE,           // 5 activity node
  NODE_BRANCH,    // 6 the branch line node
  NODE_LINK,      // 7 the link node
  NODE_SUB_PROC,  // 8 activity with sub flow
  NODE_LOOP,      // 9 repeatable activity
  NODE_ROOT_ERROR_NEW
}

// types of link in `flow.json`
export enum FLOW_DIAGRAM_FLOW_LINK_TYPE {
  DEFAULT,
  BRANCH,
  LABELED
}

export enum FLOW_DIAGRAM_NODE_MENU_ITEM_TYPE {
  ADD_BRANCH,
  SELECT_TRANSFORM,
  DELETE
}

/**
 * Debugging switch
 */
export const FLOW_DIAGRAM_DEBUG = false;
export const FLOW_DIAGRAM_VERBOSE = FLOW_DIAGRAM_DEBUG && false;

/**
 * Enumerations
 */

export enum TASK_TYPE {
  TASK_ROOT,  // this is the type for triggers
  TASK,
  TASK_BRANCH,
  TASK_SUB_PROC,
  TASK_LOOP
}

export enum PROCESS_TYPE { DEFAULT = 1 }

export enum TASK_ATTRIBUTE_TYPE {
  STRING,
  INTEGER,
  NUMBER,
  BOOLEAN,
  OBJECT,
  ARRAY,
  PARAMS,
  ANY,
  COMPLEX_OBJECT,
  SCHEMA,
  FILE,
  PASSWORD
}

/**
 * Constants
 */

export const PROCESS_MODELS = {
  "DEFAULT": "simple"
};

export const ERROR_ROOT_NAME = "__error-trigger";

/* construct the default values fo types */

let defaultValues = <{ [key: number]: any }>{};
defaultValues[TASK_ATTRIBUTE_TYPE.STRING] = "";
defaultValues[TASK_ATTRIBUTE_TYPE.PASSWORD] = "";
defaultValues[TASK_ATTRIBUTE_TYPE.INTEGER] = 0;
defaultValues[TASK_ATTRIBUTE_TYPE.NUMBER] = 0.0;
defaultValues[TASK_ATTRIBUTE_TYPE.BOOLEAN] = false;
defaultValues[TASK_ATTRIBUTE_TYPE.OBJECT] = null;
defaultValues[TASK_ATTRIBUTE_TYPE.ARRAY] = [];
defaultValues[TASK_ATTRIBUTE_TYPE.PARAMS] = null;
defaultValues[TASK_ATTRIBUTE_TYPE.ANY] = null;
defaultValues[TASK_ATTRIBUTE_TYPE.COMPLEX_OBJECT] = { "metadata": "", "value": "" };

export const DEFAULT_VALUES_OF_TYPES = defaultValues;

// export * from "./constants.diagram";

export const AUTOMAPPING_FORMAT = /^\{(A([\w-]+)|T|E)\.([\w-]+)\}((?:\.[\w-]+)*)$/;

// get default value of a given type
export function getDefaultValue(type: TASK_ATTRIBUTE_TYPE): any {
  return DEFAULT_VALUES_OF_TYPES[type];
}

/* AppMessaging event catalog */
export const APP_MESSAGING_VALUES = {
  FLOW_CHANGED: "FLOW_CHANGED",
  ADD_TASK: "ADD_TASK",
  ADD_TASK_DONE: "ADD_TASK_DONE",
  UNSELECTED_TASK: "UNSELECTED_TASK",
  TASK_DELETED: "TASK_DELETED",
  TASK_SELECTED: "TASK_SELECTED",
  CLOSE_PALETTE: "CLOSE_PALETTE",
  OPEN_TASK_PROPERTIES: "OPEN_TASK_PROPERTIES",
  DIAGRAM_FLOW_RENDERED: "DIAGRAM_FLOW_RENDERED",
  TASK_NAME_UPDATED: "TASK_NAME_UPDATED",
  NODE_ADD: "NODE_ADD"
};

export const SUPPORTED_REST_VERBS = ["GET", "POST", "PUT", "DELETE"];
export enum EnumValidationContext {
  APPLICATION,
  FLOW,
  ACTIVITY,
  TRIGGER,
  CONNECTOR,
  SECTION,
  NODE,
  FLOW_IS_MAIN
}
