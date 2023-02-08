import styles from "./App.module.css";
import { TreeViewer } from "./Components";

function App() {
  return (
    <div className={styles.main_container}>
      <h1>JSON tree viewer</h1>
      <TreeViewer />
    </div>
  );
}

export default App;
