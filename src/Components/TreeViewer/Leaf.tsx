import { FileSvg } from "../../assets/FileSvg";
import { BaseNodeId, LeafInfo } from "../../model/Node";
import { LeafOptions } from "../Options/LeafOptions";
import { useTreeViewerContext } from "./Context";
import styles from "./styles.TreeViewer.module.css";

export function Leaf({ id }: { id: BaseNodeId }) {
  const { nodeRecord } = useTreeViewerContext();
  const { name, value } = nodeRecord[id] as LeafInfo;
  return (
    <div className={styles.base_node_display + " " + styles.leaf_node_display}>
      <div className={styles.leaf_left_container}>
        <div className={styles.svg_container}>
          <FileSvg />
        </div>
        <span>
          {name}: {value}
        </span>
      </div>
      <LeafOptions elementId={id} night={true} />
    </div>
  );
}
