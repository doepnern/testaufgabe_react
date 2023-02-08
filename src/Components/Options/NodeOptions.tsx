import { useState } from "react";
import { createPortal } from "react-dom";
import { OptionsSvg } from "../../assets/OptionsSvg";
import { BaseNodeId, createNode, isNode } from "../../model/Node";
import { CreateLeafDialogue } from "../Dialogues/CreateLeafDialogue";
import { CreateNodeDialogue } from "../Dialogues/CreateNodeDialogue";
import { Dropdown } from "../Dropdown/Dropdown";
import { Modal } from "../Modal/Modal";
import {
  useDisptachTreeViewerContext,
  useTreeViewerContext,
} from "../TreeViewer/context/TreeViewerContext";
import styles from "./options.style.module.css";

export function NodeOptions({
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
  if (!isNode(node)) throw new Error("expected node for node options");

  //erlaubt immer nur entweder eine leaf oder node auf ein mal
  const [creatingNode, setCreatingNode] = useState<{
    status: "leaf" | "node" | null;
  }>({
    status: null,
  });

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
              <button
                className={styles.dropdown_button}
                onClick={(e) => {
                  setCreatingNode({ status: "node" });
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                Add node
              </button>
              <button
                className={styles.dropdown_button}
                onClick={(e) => {
                  setCreatingNode({ status: "leaf" });
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                Add leaf
              </button>
            </>
          }
        />
      </div>
      {creatingNode.status === "node" &&
        createPortal(
          <Modal close={() => undefined} isOpen={true}>
            <CreateNodeDialogue
              onCancel={() => setCreatingNode({ status: null })}
              onSubmit={({ name }) => {
                dispatch({
                  type: "addNode",
                  value: { name, level: node.level + 1, parentId: node.id },
                });
                setCreatingNode({ status: null });
              }}
            />
          </Modal>,
          document.body
        )}
      {creatingNode.status === "leaf" &&
        createPortal(
          <Modal close={() => undefined} isOpen={true}>
            <CreateLeafDialogue
              onCancel={() => setCreatingNode({ status: null })}
              onSubmit={({ name, value }) => {
                dispatch({
                  type: "addLeaf",
                  value: {
                    name,
                    value: value,
                    parentId: node.id,
                  },
                });
                setCreatingNode({ status: null });
              }}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}
