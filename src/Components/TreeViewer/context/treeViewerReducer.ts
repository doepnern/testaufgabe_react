import {
  BaseNodeId,
  createLeaf,
  createNode,
  isNode,
} from "../../../model/Node";
import { TreeViewerState } from "./initialState";

export type TreeViewerActions =
  | {
      type: "toggleOpen";
      value: BaseNodeId;
    }
  | { type: "delete"; value: { id: BaseNodeId; parentId: BaseNodeId } }
  | { type: "addNode"; value: Parameters<typeof createNode>[0] }
  | { type: "addLeaf"; value: Parameters<typeof createLeaf>[0] };

export function treeViewerReducer(
  state: TreeViewerState,
  action: TreeViewerActions
): TreeViewerState {
  switch (action.type) {
    case "toggleOpen":
      if (!(action.value in state.nodeRecord))
        throw new Error("Trying to collapse non exisiting node");
      const oldNode = state.nodeRecord[action.value];
      if (!("collapsed" in oldNode))
        throw new Error("tried to collapse node which is not collapsable");
      return {
        ...state,
        nodeRecord: {
          ...state.nodeRecord,
          [oldNode.id]: { ...oldNode, collapsed: !oldNode.collapsed },
        },
      };
    case "addNode": {
      const allNodes = state.nodeRecord;
      const nodesCopy = { ...allNodes };
      const newNode = createNode(action.value);
      nodesCopy[newNode.id] = newNode;
      const parentNode = nodesCopy[action.value.parentId];
      if (!isNode(parentNode)) throw new Error("Cannot add node to leaf");
      const newParent = {
        ...parentNode,
        children: [...parentNode.children, newNode.id],
      };
      nodesCopy[action.value.parentId] = newParent;
      return { ...state, nodeRecord: nodesCopy };
    }
    case "addLeaf": {
      const allNodes = state.nodeRecord;
      const nodesCopy = { ...allNodes };
      const newNode = createLeaf(action.value);
      nodesCopy[newNode.id] = newNode;
      const parentNode = nodesCopy[action.value.parentId];
      if (!isNode(parentNode)) throw new Error("Cannot add node to leaf");
      const newParent = {
        ...parentNode,
        children: [...parentNode.children, newNode.id],
      };
      nodesCopy[action.value.parentId] = newParent;
      return { ...state, nodeRecord: nodesCopy };
    }
    case "delete": {
      const allNodes = state.nodeRecord;
      const nodesCopy = { ...allNodes };
      delete nodesCopy[action.value.id];
      const parentNode = nodesCopy[action.value.parentId];
      if (!isNode(parentNode)) throw new Error("Cannot delete node from leaf");
      const newParent = {
        ...parentNode,
        children: parentNode.children.filter((id) => id !== action.value.id),
      };
      return {
        ...state,
        nodeRecord: { ...nodesCopy, [newParent.id]: newParent },
      };
    }
    default:
      throw new Error("unknown action " + action);
  }
}
