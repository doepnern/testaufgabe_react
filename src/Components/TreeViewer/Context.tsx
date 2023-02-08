import { createContext, ReactNode, useContext, useReducer } from "react";
import { parseInitialState } from "./State";
import exampleJson from "../../assets/example.json";
import { TreeViewerActions, treeViewerReducer } from "./treeViewerReducer";

const initialState = parseInitialState(exampleJson);
const TreeViewerContext = createContext(initialState);
const TreeViewerDispatchContext = createContext<
  React.Dispatch<TreeViewerActions>
>(null!);

export function TreeViewerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(treeViewerReducer, initialState);
  return (
    <TreeViewerDispatchContext.Provider value={dispatch}>
      <TreeViewerContext.Provider value={state}>
        {children}
      </TreeViewerContext.Provider>
    </TreeViewerDispatchContext.Provider>
  );
}
export function useTreeViewerContext() {
  const ctx = useContext(TreeViewerContext);
  if (!ctx) throw new Error("Ctx not found");
  return ctx;
}
export function useDisptachTreeViewerContext() {
  const ctx = useContext(TreeViewerDispatchContext);
  if (!ctx) throw new Error("Ctx not found");
  return ctx;
}
