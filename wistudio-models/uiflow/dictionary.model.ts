import {
  IFlowDiagramTask
} from "./task.model";
import {
  IFlowDiagramRootNode,
  IFlowDiagramNode,
} from "./node.model";
import {
  IFlowDiagramNodeDictionary,
  IFlowDiagramTaskDictionary,
} from "./dictionary.model";
import { TASK_TYPE } from "../../constants";
import { Guid } from "../../util/utils";
import { IConnection } from "../connection";

export interface IFlowDiagramTaskDictionary {
    [index: string]: IFlowDiagramTask;
}

export interface IFlowDiagramNodeDictionary {
    [index: string]: IFlowDiagramNode;
}

export interface IConnectionDictionary {
    [index: string]: IConnection;
}

export class FlowDiagramNodeDictionary implements IFlowDiagramNodeDictionary {
    [index: string]: IFlowDiagramNode;
}
