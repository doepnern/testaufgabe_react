import { FolderSvg } from "../../assets/FolderSvg";
import { NodeInfo } from "../../model/Node";
import { NodeOptions } from "../Options";
import {
  useDisptachTreeViewerContext,
  useTreeViewerContext,
} from "./context/TreeViewerContext";
import styles from "./styles.TreeViewer.module.css";
import { baseNodeMapping } from "./TreeViewer";

export function Node({ id }: { id: string }) {
  const { nodeRecord } = useTreeViewerContext();
  const { name, collapsed, children } = nodeRecord[id] as NodeInfo;
  const dispatch = useDisptachTreeViewerContext();

  return (
    <div className={styles.node_container}>
      <div
        className={styles.base_node_display + " " + styles.node_display}
        onClick={() => dispatch({ type: "toggleOpen", value: id })}
      >
        <div className={styles.leaf_left_container}>
          <div className={`${styles.svg_container} ${styles.dark_svg}`}>
            <FolderSvg />
          </div>
          <span>
            {name} ({collapsed ? "+" : "-"})
          </span>
        </div>
        <NodeOptions elementId={id} night={false} />
      </div>
      {collapsed ? (
        <></>
      ) : (
        <div
          className={styles.node_list}
          style={{ marginLeft: "1rem", marginTop: "10px" }}
        >
          {children.length > 0 ? (
            children.map((childId) => baseNodeMapping(childId, nodeRecord))
          ) : (
            <div>No children</div>
          )}
        </div>
      )}
    </div>
  );
}
