import { TreeViewerContextProvider } from "./Context";
import { TreeViewerInner } from "./TreeViewer";

export function TreeViewer() {
  return (
    <TreeViewerContextProvider>
      <TreeViewerInner />
    </TreeViewerContextProvider>
  );
}
