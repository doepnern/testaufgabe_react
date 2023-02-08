import { v4 } from "uuid";
import {
  BaseNodeId,
  BaseNodeInfo,
  createLeaf,
  createNode,
} from "../../model/Node";

export type TreeViewerState = {
  nodeRecord: Record<BaseNodeId, BaseNodeInfo>;
};

type JsonTypeInner = string | number | { [key: string]: JsonTypeInner };
type JsonType = { [key: string]: JsonTypeInner };

export function parseInitialState(jsonIn: JsonType): TreeViewerState {
  let nodeRecord: TreeViewerState["nodeRecord"] = {};
  //parses all keys of one level and returns nodeIds in this level
  const parseLevel = (
    json: JsonType,
    level: number,
    parentId: string
  ): BaseNodeId[] => {
    const levelKeys = Object.keys(json);
    return levelKeys.map((key) => {
      const val = json[key];
      if (isLeaf(val)) {
        const newLeaf = createLeaf({ name: key, value: val, parentId });
        // add leave notes to state
        nodeRecord = {
          ...nodeRecord,
          [newLeaf.id]: newLeaf,
        };
        return newLeaf.id;
      } else {
        const newNode = createNode({ name: key, parentId, level: level });
        const children = parseLevel(val, level + 1, newNode.id);
        newNode.children = children;
        nodeRecord = {
          ...nodeRecord,
          [newNode.id]: newNode,
        };
        return newNode.id;
      }
    });
  };

  const rootNode = createNode({ level: 0, name: "root", parentId: "none" });
  rootNode.children = parseLevel(jsonIn, 1, rootNode.id);
  const treeState: TreeViewerState = {
    nodeRecord: { ...nodeRecord, root: rootNode },
  };

  return treeState;
}

export function isLeaf(val: JsonTypeInner): val is string | number {
  return ["string", "number"].includes(typeof val);
}
