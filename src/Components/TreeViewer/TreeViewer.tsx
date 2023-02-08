import styles from "./styles.TreeViewer.module.css";
import { Leaf } from "./Leaf";
import { Node } from "./Node";
import { useTreeViewerContext } from "./context/TreeViewerContext";
import { isNode, NodeInfo, BaseNodeInfo } from "../../model/Node";

export function TreeViewerInner() {
  const { nodeRecord } = useTreeViewerContext();
  const rootNode = nodeRecord["root"] as NodeInfo;
  const children = rootNode.children;
  return (
    <>
      <div className={styles.node_list}>
        {children.map((key) => baseNodeMapping(key, nodeRecord))}
      </div>
    </>
  );
}

export function baseNodeMapping(
  key: string,
  nodeRecord: Record<string, BaseNodeInfo>
) {
  return isNode(nodeRecord[key]) ? (
    <Node key={nodeRecord[key].id} id={nodeRecord[key].id} />
  ) : (
    <Leaf key={nodeRecord[key].id} id={nodeRecord[key].id} />
  );
}
