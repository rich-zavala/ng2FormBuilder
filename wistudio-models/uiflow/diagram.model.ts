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
import { FlowDiagramNode } from "./node.model";
import * as lodash from "lodash";
import { FLOW_DIAGRAM_NODE_TYPE } from "../../constants";

export interface IFlowDiagram {
  root: IFlowDiagramRootNode;
  nodes: IFlowDiagramNodeDictionary;
  MAX_ROW_LEN?: number;
}

export const DEFAULT_MAX_ROW_LEN = 5;

export class FlowDiagramTMP implements IFlowDiagram {
  public root: IFlowDiagramRootNode;
  public nodes: IFlowDiagramNodeDictionary;
  public MAX_ROW_LEN = DEFAULT_MAX_ROW_LEN;

  static getEmptyDiagram(diagramType?: string): IFlowDiagram {
    let newRootNode = new FlowDiagramNode();
    let emptyDiagram = <IFlowDiagram>{
      root: {
        is: newRootNode.id
      },
      nodes: <IFlowDiagramNodeDictionary>{}
    };

    newRootNode.type = diagramType === "error" ? FLOW_DIAGRAM_NODE_TYPE.NODE_ROOT_ERROR_NEW : FLOW_DIAGRAM_NODE_TYPE.NODE_ROOT_NEW;

    emptyDiagram.nodes[newRootNode.id] = newRootNode;

    return emptyDiagram;
  }

  constructor(diagram: IFlowDiagram,
    private tasks: IFlowDiagramTaskDictionary,
    private elm?: HTMLElement,
    private diagramType?: string) {
    this.updateDiagram(diagram);
  }

  public updateDiagram(diagram: IFlowDiagram): Promise<FlowDiagramTMP> {
    if (lodash.isEmpty(diagram) || lodash.isEmpty(diagram.root)) {

      this.updateDiagram(FlowDiagramTMP.getEmptyDiagram(this.diagramType));

    } else {

      this.root = lodash.cloneDeep(diagram.root);

      let nodeDict: IFlowDiagramNodeDictionary = {};
      lodash.forIn(diagram.nodes, (node, nodeID) => {
        if (node instanceof FlowDiagramNode) {
          nodeDict[nodeID] = node;
        } else {
          nodeDict[nodeID] = new FlowDiagramNode(node);
        }
      });
      this.nodes = nodeDict;

      this.MAX_ROW_LEN = lodash.isNumber(diagram.MAX_ROW_LEN) ? diagram.MAX_ROW_LEN : this.MAX_ROW_LEN;
    }


    return Promise.resolve(this);
  }
}

export class FlowDiag implements IFlowDiagram {
  root: IFlowDiagramRootNode;
  nodes: IFlowDiagramNodeDictionary;
  MAX_ROW_LEN?: number;
}
