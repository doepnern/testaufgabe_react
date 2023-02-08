import { TreeViewerContextProvider } from "./context/TreeViewerContext";
import { TreeViewerInner } from "./TreeViewer";

export function TreeViewer() {
  return (
    <TreeViewerContextProvider>
      <TreeViewerInner />
    </TreeViewerContextProvider>
  );
}
