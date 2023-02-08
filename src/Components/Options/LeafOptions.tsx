import { useState } from "react";
import { OptionsSvg } from "../../assets/OptionsSvg";
import { BaseNodeId, isNode } from "../../model/Node";
import { Dropdown } from "../Dropdown/Dropdown";
import {
  useDisptachTreeViewerContext,
  useTreeViewerContext,
} from "../TreeViewer/context/TreeViewerContext";
import styles from "./options.style.module.css";

export function LeafOptions({
  night = true,
  elementId,
}: {
  night?: boolean;
  elementId: BaseNodeId;
}) {
  const [open, setOpen] = useState(false);
  const dispatch = useDisptachTreeViewerContext();
  const state = useTreeViewerContext();
  const node = state.nodeRecord[elementId];
  if (isNode(node)) throw new Error("expected leaf node for leaf node options");

  return (
    <>
      <div style={{ position: "relative", height: "100%" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          className={styles.options_button + (night ? " " + styles.night : "")}
        >
          <OptionsSvg className={styles.options_svg} />
        </button>
        <Dropdown
          open={open}
          close={() => setOpen(false)}
          content={
            <>
              <button
                className={styles.dropdown_button}
                onClick={(e) => {
                  dispatch({
                    type: "delete",
                    value: { id: elementId, parentId: node.parentId },
                  });
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                delete
              </button>
            </>
          }
        />
      </div>
    </>
  );
}
