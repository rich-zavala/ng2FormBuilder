import { IMapping } from "./../mapper/map-model";
import { IFlowDiagramTaskLink } from "./task-link.model";
import { IFlowDiagramTaskAttributeMapping } from "./attribute-mapping.model";
import { IFlowDiagramTaskAttributes } from "./attribute.model";
// import {
//   IFlowDiagramTaskAttributeMapping,
//   IFlowDiagramTaskLink,
//   IFlowDiagramTaskAttributes
// } from "../../models";
import { TASK_TYPE, TASK_ATTRIBUTE_TYPE, ERROR_ROOT_NAME } from "../../constants";
import { Guid } from "../../util/utils";
import * as lodash from "lodash";
import { TRIGGERS } from "./palette.schema";
import { IFlowDiagramTaskAttribute } from "./attribute.model";

export interface IFlowDiagramTask {
  id: string;
  type: TASK_TYPE;
  version?: string;
  name?: string;
  description?: string;
  title?: string;
  activityType?: string;
  triggerType?: string;
  attributes?: IFlowDiagramTaskAttributes;
  inputMappings?: IMapping;
  outputMappings?: IFlowDiagramTaskAttributeMapping[];
  tasks?: IFlowDiagramTask[];
  links?: IFlowDiagramTaskLink[];
  condition?: string;
  _schema?: IFlowDiagramSchema;
  homepage?: string;
  settings?: IFlowDiagramTaskAttribute[];
  outputs?: IFlowDiagramTaskAttributeMapping[];
  endpoint?: { settings: IFlowDiagramTaskAttributeMapping[] };
  author?: string;
  where?: string;
  installed?: boolean;
  activityTitle?: string;
  wi?: any;
  inputs?: IFlowDiagramTaskAttribute[];
}

export interface IFlowDiagramSchema {
  description: string;
  homepage?: string;
  inputs?: IFlowDiagramTaskAttributeMapping[];
  name: string;
  outputs?: IFlowDiagramTaskAttributeMapping[];
  title: string;
  version?: string;
  endpoint?: { settings: IFlowDiagramTaskAttributeMapping[] };
}

export class FlowDiagramTask implements IFlowDiagramTask {
  id: string;
  type: TASK_TYPE;
  version: string;
  name: string;
  description: string;
  title: string;
  activityType: string;
  triggerType: string;
  attributes: IFlowDiagramTaskAttributes;
  inputMappings: IMapping;
  outputMappings: IFlowDiagramTaskAttributeMapping[];
  tasks: IFlowDiagramTask[];
  links: IFlowDiagramTaskLink[];
  homepage: string;
  settings: any[];
  outputs?: IFlowDiagramTaskAttributeMapping[];
  endpoint?: { settings: IFlowDiagramTaskAttributeMapping[] };
  __schema: any;
  activityTitle: string;
  wi?: any;

  static genTaskID(): string {
    return Guid.newGuid();
  };
  constructor(task?: any) {
    this.update(task);
    this.title = this.title.replace(/\s/g, "");
  };

  update(task: any) {
    if (!task) {
      task = <IFlowDiagramTask>{};
    }

    this.id = task.id || this.id || FlowDiagramTask.genTaskID();
    this.type = task.type || this.type || TASK_TYPE.TASK;
    this.version = task.version || this.version || "";
    this.name = task.name || this.name || "new task";
    this.description = task.description || this.description || "";
    this.title = task.title || this.title || "";
    this.wi = task.wi || this.wi || {};
    if (TRIGGERS.indexOf(this.name) > -1) {
      this.triggerType = task.triggerType || this.triggerType || this.name;
    } else {
      this.activityType = task.activityType || this.activityType || this.name;
    }

    this.homepage = task["ref"] || this.homepage || "";
    this.settings = task.settings || this.settings || [];
    this.outputs = <IFlowDiagramTaskAttributeMapping[]>task.outputs || this.outputs || [];
    this.endpoint = task.endpoint || this.endpoint || { settings: [] };
    this.__schema = task || {};

    if (lodash.isEmpty(task.attributes)) {
      this.attributes = <IFlowDiagramTaskAttributes>{};
      this.attributes.inputs = [];
      if (this.__schema.inputs) {
        for (let i = 0; i < this.__schema.inputs.length; i++) {
          if (!this.__schema.inputs[i].tags || this.__schema.inputs[i].tags.indexOf("Input") > -1) {
            this.attributes.inputs.push(this.__schema.inputs[i]);
          } else {
            this.settings.push(this.__schema.inputs[i]);
          }
        }
      }
      this.attributes.outputs = this.__schema.outputs;
    } else {
      this.attributes = lodash.cloneDeep(task.attributes);
    }
    // this.attributes = lodash.isEmpty(task.attributes) ?
    //     this.attributes || <IFlowDiagramTaskAttributes>{} :
    //     lodash.cloneDeep(task.attributes);
    this.inputMappings = lodash.isEmpty(task.inputMappings) ? this.inputMappings || {} : lodash.cloneDeep(task.inputMappings);
    this.outputMappings = lodash.isEmpty(task.outputMappings) ?
      this.outputMappings || [] :
      lodash.cloneDeep(task.outputMappings);

    if (!lodash.isEmpty(task.tasks)) {
      this.tasks = lodash.cloneDeep(task.tasks);
    }

    if (!lodash.isEmpty(task.links)) {
      this.links = lodash.cloneDeep(task.links);
    }
  };
}
