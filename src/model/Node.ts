import { v4 } from "uuid";

export type BaseNodeId = string;

interface BaseNode {
  name: string;
  id: BaseNodeId;
  parentId: BaseNodeId;
}
export interface NodeInfo extends BaseNode {
  children: BaseNodeId[];
  level: number;
  collapsed: boolean;
}

export interface LeafInfo extends BaseNode {
  value: string | number;
}

export type BaseNodeInfo = NodeInfo | LeafInfo;

export function createNode(options: {
  level: number;
  name: string;
  parentId: string;
  children?: string[];
  collapsed?: boolean;
}) {
  const baseNode: NodeInfo = {
    id: v4(),
    collapsed: true,
    children: [],
    level: options.level,
    name: "New Node",
    parentId: options.parentId,
  };
  Object.assign(baseNode, options);
  return baseNode;
}

export function createLeaf(options: {
  name: string;
  parentId: string;
  value: string | number;
}) {
  const baseNode: LeafInfo = {
    id: v4(),
    name: "New Leaf",
    parentId: options.parentId,
    value: "",
  };
  Object.assign(baseNode, options);
  return baseNode;
}

//node is Leaf when the value is a primitie
export function isNode(value: BaseNodeInfo): value is NodeInfo {
  return !("value" in value);
}
