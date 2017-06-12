import { IFlowDiagram } from "./diagram.model";
import { FLOW_DIAGRAM_NODE_TYPE } from "../../constants";
import { Guid } from "../../util/utils";
import * as lodash from "lodash";

export interface IFlowDiagramNode {
  id: string;
  taskID?: string;
  type: FLOW_DIAGRAM_NODE_TYPE;
  children: string[];
  parents: string[];
  subProc: IFlowDiagram[];
}

export interface IFlowDiagramNodeLocation {
  children: string[];
  parents: string[];
}

export interface IFlowDiagramRootNode {
  is: string;
}

export class FlowDiagramNode implements IFlowDiagramNode {
  id: string;
  taskID: string;
  type: FLOW_DIAGRAM_NODE_TYPE;
  children: string[];
  parents: string[];
  subProc: IFlowDiagram[];

  constructor(node?: IFlowDiagramNode) {
    if (!node) {
      node = {
        id: Guid.newGuid(),
        taskID: "",
        type: FLOW_DIAGRAM_NODE_TYPE.NODE_ADD,
        children: [],
        parents: [],
        subProc: []
      };
    }

    this.update(node);
  };

  public update(node: IFlowDiagramNode): Promise<FlowDiagramNode> {

    this.id = node.id;
    this.taskID = node.taskID;
    this.type = node.type;
    this.children = lodash.cloneDeep(node.children);
    this.parents = lodash.cloneDeep(node.parents);
    this.subProc = lodash.cloneDeep(node.subProc);

    return Promise.resolve(this);
  };

  public linkToParents(nodeIDs: string[]): Promise<boolean> {
    this.parents = lodash.union(this.parents, nodeIDs);
    return Promise.resolve(true);
  };

  public linkToChildren(nodeIDs: string[]): Promise<boolean> {
    this.children = lodash.union(this.children, nodeIDs);
    return Promise.resolve(true);
  };

  static genNodeID(): string {
    return Guid.newGuid();
  };
}

export class FlowDiagramRootNode implements IFlowDiagramRootNode {
  is: string;
}
