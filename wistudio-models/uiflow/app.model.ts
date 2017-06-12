// tslint:disable:forin
import { IFlowDiagramNode, FlowDiagramNode } from "./node.model";
import { IFlowDiagramTask, FlowDiagramTask } from "./task.model";
import { Guid } from "../../util/utils";
import { IFlow, Flow } from "./flows";
import { TASK_TYPE, FLOW_DIAGRAM_NODE_TYPE } from "../../constants";
import * as lodash from "lodash";
import { STRING_MAP } from "../../index";

export const SCHEMA_KEYWORD = "schema:";

export interface IAppModel {
  id: string;
  applicationName: string;
  version: string;
  modelVersion?: VERSION_TYPE;
  description?: string;
  flows?: IFlowDictionary;
  _schema?: ISchemaDictionary;
  createdTime?: number;
  lastUpdatedTime?: number;
  isPushed?: boolean;
  appChanges?: number;
}

export interface ISchemaDictionary {
  [schemaId: string]: ISchema;
}

export enum VERSION_TYPE {
  VERSION_100
}

export interface IFlowDictionary {
  [id: string]: IFlow;
}

export interface ISchema {
  schemaId: string;
  schema: any;
}

export class AppModel implements IAppModel {

  id: string;
  version: string;
  applicationName: string;
  description?: string;
  flows?: IFlowDictionary;
  errorHandler?: IFlowDictionary;
  _schema?: ISchemaDictionary;
  createdTime?: number;
  lastUpdatedTime?: number;
  modelVersion: VERSION_TYPE = VERSION_TYPE.VERSION_100;
  isPushed?: boolean;
  appChanges?: number;

  constructor(data) {
    this.id = data.id;
    this.applicationName = data.applicationName;
    this.description = data.description;
    this.version = data.version;
    this.flows = data.flows;
    this.errorHandler = data.errorHandler;
    this.createdTime = data.createdTime;
    this.lastUpdatedTime = data.lastUpdatedTime;
    this._schema = data.schema ? data.schema : {};
    this.isPushed = data.isPushed;
    this.appChanges = data.appChanges;
  }

  addFlow(flow: IFlow) {
    this.flows[flow._id] = flow;
  }

  getFlow(id: string): IFlow {
    return this.flows[id];
  }

  getFlows(): IFlowDictionary {
    return this.flows;
  }

  deleteFLow(id: string): AppModel {
    delete this.flows[id];
    return this;
  }

  addActivityToFlow(flowId: string, item: IFlowDiagramTask) {
    let flow = this.getFlowById(flowId);
    if (!flow.items) {
      flow.items = {};
    }
    flow.items[item.id] = item;
  }

  addNodeToFlow(flowId: string, node: IFlowDiagramNode) {
    let flow = this.getFlowById(flowId);
    if (!flow.paths) {
      flow.paths = { nodes: {}, root: { is: "" } };
    }
    flow.paths.nodes[node.id] = node;
    for (let i = 0; i < node.parents.length; i++) {
      if (flow.paths.nodes[node.parents[i]].children.indexOf(node.id) < 0) {
        flow.paths.nodes[node.parents[i]].children.push(node.id);
      }
    }
  }

  getAddSchema(schema: string): string {
    schema = JSON.parse(schema);
    let finalSchema: ISchema;
    finalSchema.schemaId = Guid.newGuid();
    finalSchema.schema = schema;
    this._schema[SCHEMA_KEYWORD + finalSchema.schemaId] = finalSchema;
    return finalSchema.schemaId;
  }

  setRoot(flowId: string, id: string) {
    this.getFlowById(flowId).paths.root.is = id;
  }

  getSchema(id: string): string {
    if (id.indexOf(SCHEMA_KEYWORD) > -1) {
      return JSON.stringify(this._schema[id]);
    }
    return JSON.stringify(this._schema[SCHEMA_KEYWORD + id]);
  }

  getSchemas(): ISchemaDictionary {
    return this._schema;
  }

  deleteActivity(flowId: string, itemId: string, deleteNonBranch?: boolean): AppModel {
    let node = this.getTaskNode(flowId, itemId);
    this.deleteNode(flowId, node.id);
    this.repairRelations(flowId);
    this.cleanNodes(flowId);
    return this;
  }

  deleteNode(flowId: string, nodeId: string, deleteNonBranch?: boolean) {
    let flow = this.getFlowById(flowId);
    let node = flow.paths.nodes[nodeId];
    if (node) {
      if (!deleteNonBranch) { // If current node is a branch being deleted
        deleteNonBranch = node.type === FLOW_DIAGRAM_NODE_TYPE.NODE_BRANCH;
      }

      let childNodes = [];
      let nodeParents = lodash.cloneDeep(node.parents);
      node.children.forEach(childNodeId => {
        let childNode = flow.paths.nodes[childNodeId];
        if (deleteNonBranch || childNode.type === FLOW_DIAGRAM_NODE_TYPE.NODE_BRANCH) { // Delete all tasks of a branch
          childNode.children.forEach(branchChildId => {
            this.deleteNode(flow._id, branchChildId, true);
          });
          this.deleteNode(flow._id, childNodeId, true);
        } else { // Following non-branch child replace this node position
          flow.paths.nodes[childNodeId].parents = nodeParents;
          childNodes.push(childNodeId);
        }
      });

      nodeParents.forEach(nodeParentId => { // Update parents of node to be deleted
        let parentNode = flow.paths.nodes[nodeParentId];
        if (parentNode) {
          flow.paths.nodes[nodeParentId].children = lodash.union(lodash.remove(parentNode.children, nodeId), childNodes);
        }
      });

      delete flow.items[node.taskID]; // Delete the item
    }

    delete flow.paths.nodes[nodeId]; // Delete the node
    return this;
  }

  addActivity(flowId: string, schema: any, activityType: TASK_TYPE, node: FlowDiagramNode, addTaskId?: boolean): string {
    let item: IFlowDiagramTask = new FlowDiagramTask(schema);
    item.type = activityType;
    this.addActivityToFlow(flowId, item);
    if (addTaskId) {
      node.taskID = item.id;
    }
    this.addNodeToFlow(flowId, node);
    if (node.type === FLOW_DIAGRAM_NODE_TYPE.NODE_ROOT) {
      this.setRoot(flowId, node.id);
    }
    this.cleanNodes(flowId);
    return item.id;
  }

  /* replaceActivity(oldTaskId: string, flowId: string, schema: any, activityType: TASK_TYPE): string {
    // "activityType" argument must be removed
    let item: IFlowDiagramTask = new FlowDiagramTask(schema);
    delete this.flows[flowId].items[oldTaskId];
    this.addActivityToFlow(flowId, item);
    for (let nodeId in this.flows[flowId].paths.nodes) {
      if (this.flows[flowId].paths.nodes[nodeId].taskID === oldTaskId) {
        this.flows[flowId].paths.nodes[nodeId].taskID = item.id;
        this.flows[flowId].paths.nodes[nodeId].type = FLOW_DIAGRAM_NODE_TYPE.NODE;
      }
    }
    return item.id;
  } */

  addBranch(flowId: string, parentTaskId: string): string {
    let parentNode = this.getTaskNode(flowId, parentTaskId);
    let item: IFlowDiagramTask = new FlowDiagramTask({});
    item.type = TASK_TYPE.TASK_BRANCH;
    let node = new FlowDiagramNode();
    node.taskID = item.id;
    node.type = FLOW_DIAGRAM_NODE_TYPE.NODE_BRANCH;
    node.parents.push(parentNode.id);

    this.addActivityToFlow(flowId, item);
    this.addNodeToFlow(flowId, node);

    return item.id;
  }

  getTaskNode(flowId: string, taskId: string): IFlowDiagramNode {
    let nodes = this.getFlowById(flowId).paths.nodes;
    for (let i in nodes) {
      if (nodes[i].taskID === taskId) {
        return nodes[i];
      }
    }
  }

  getNodeTask(flowId: string, nodeId: string): IFlowDiagramTask {
    let flow = this.getFlowById(flowId);
    let node = flow.paths.nodes[nodeId];
    return node ? flow.items[node.taskID] : undefined;
  }

  // Removes empty nodes at the end of rows
  cleanNodes(flowId: string) {
    let flow = this.getFlowById(flowId);
    this.repairRelations(flowId);

    let keep = true;
    let deletedNodes = [];
    let nodes = flow.paths.nodes;
    while (keep) {
      let deleted = false;
      for (let i in nodes) {
        if (nodes[i].type === FLOW_DIAGRAM_NODE_TYPE.NODE_ADD && nodes[i].children.length === 0) {
          deletedNodes.push(i);
          for (let ii in nodes) {
            lodash.remove(nodes[ii].children, (ch) => ch === i);
          }
          delete nodes[i];
          deleted = true;
        }
      }
      keep = deleted;
    }

    for (let i in nodes) {
      for (let ii in nodes[i].children) {
        if (lodash.isUndefined(nodes[nodes[i].children[ii]])) {
          lodash.remove(nodes[i].children, (ch) => ch === nodes[i].children[ii]);
        }
      }
    }
  }

  // RZ-Experimental
  repairRelations(flowId: string) {
    let fixes = [];
    let flow = this.getFlowById(flowId);
    let nodes = flow.paths.nodes;
    for (let ni in nodes) {
      let node = nodes[ni];
      for (let i in node.parents) {
        if (!nodes[node.parents[i]]) {
          fixes.push("Fixes: [Unable to fix] Parent " + node.parents[i] + " doesn't exists. Node: " + node.id);
        } else if (nodes[node.parents[i]].children.indexOf(node.id) < 0) {
          fixes.push("Fixes: Parent " + node.parents[i] + " have not " + node.id + " as child");
          nodes[node.parents[i]].children.push(node.id);
        }
      }

      let childToRemove = [];
      for (let i in node.children) {
        if (!nodes[node.children[i]]) {
          fixes.push("Fixes: Child " + node.children[i] + " doesn't exists. Node: " + node.id);
          childToRemove.push(i);
        } else if (nodes[node.children[i]].parents.indexOf(node.id) < 0) {
          fixes.push("Fixes: Child " + node.children[i] + " have not " + node.id + " as parent");
          nodes[node.children[i]].parents.push(node.id);
        }
      }

      childToRemove.map(child => node.children.splice(child, 1));
    }
    if (fixes.length > 0) {
      // console.log("AppModelRelationsFixes: ", fixes, lodash.cloneDeep(nodes));
    }
  }

  // RZ-24Apr
  addErrorHandler(flowId: string, errorTriggerData: any): IFlow {
    let flow = this.getFlowById(flowId);
    let errorHandlerFlow = new Flow(null, null);
    if (!flow.errorHandler) {
      flow.errorHandler = <STRING_MAP<IFlow>>{};
    }
    flow.errorHandler[errorHandlerFlow._id] = errorHandlerFlow;

    // Create initial error handler node
    let rootNode = new FlowDiagramNode();
    rootNode.type = FLOW_DIAGRAM_NODE_TYPE.NODE_ROOT_ERROR_NEW;

    this.addActivity(errorHandlerFlow._id, errorTriggerData, TASK_TYPE.TASK_ROOT, rootNode, true);
    this.setRoot(errorHandlerFlow._id, rootNode.id);
    return errorHandlerFlow;
  }

  getFlowById(flowId: string): Flow {
    if (this.flows[flowId]) {
      return this.flows[flowId];
    } else {
      for (let i in this.flows) {
        if (this.flows[i].errorHandler && this.flows[i].errorHandler[flowId]) {
          return this.flows[i].errorHandler[flowId];
        }
      }
    }
    return null;
  }
}
