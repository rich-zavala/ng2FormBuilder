import { IFlowDiagramRootNode } from "./node.model";
import { IFlowDiagram } from "./diagram.model";
import { IFlowDiagramTaskDictionary, IConnectionDictionary } from "./dictionary.model";
import { Guid } from "../../util/utils";
import { STRING_MAP } from "../../index";

export interface IFlow {
  description: string;
  // errorHandler: HandlerInfo;
  errorHandler: STRING_MAP<IFlow>;
  items: IFlowDiagramTaskDictionary;
  name: string;
  paths: IFlowDiagram;
  _id: string;
  connections: IConnectionDictionary;
}

export interface HandlerInfo {
  diagram: IFlowDiagram;
  tasks: IFlowDiagramTaskDictionary;
}

export class Flow {

  description: string;
  // errorHandler: HandlerInfo;
  errorHandler: STRING_MAP<IFlow>;
  items: IFlowDiagramTaskDictionary;
  name: string;
  paths: IFlowDiagram;
  _id: string;
  connections: IConnectionDictionary;
  // Parameterized constructor 
  // Takes one parameter
  // That is the name that user enterd for the flow
  // Finally this constructor returns the flow model object with Id(Generated) and the name that user provided
  constructor(name: string, description: string) {
    this._id = Guid.newGuid();
    this.name = name;
    this.description = description;
    this.items = {};
    this.paths = <IFlowDiagram>{};
    this.paths.root = <IFlowDiagramRootNode>{};
    this.paths.nodes = {};

  }
}

// export const ActivityTypeMap = {
//     "tibco-log" : "ACTIVITY_LOG",
//     "tibco-timer": "ACTIVITY_TIMER",
//     "tibco-rest": "ACTIVITY_REST",
//     "tibco-reply": "ACTIVITY_REPLY"
// };
