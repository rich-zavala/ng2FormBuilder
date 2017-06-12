import { TASK_ATTRIBUTE_TYPE } from "../../constants";

export interface IFlowDiagramTaskAttributeMapping {
  type: TASK_ATTRIBUTE_TYPE;
  value: any;
  mapTo: string;
  name: string;
  relatedTo?: string;
  wi?: any;
  allowed?: any[];
}

export class FlowDiagramTaskAttributeMapping implements IFlowDiagramTaskAttributeMapping {
  type: TASK_ATTRIBUTE_TYPE;
  value: string;
  mapTo: string;
  name: string;
}
