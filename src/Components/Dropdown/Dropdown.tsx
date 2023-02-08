import { useEffect } from "react";
import styles from "./styles.dropdown.module.css";

//würde normalerweise eine library verwenden um overflow zu den seiten zu verhindern und dynamisch dis beste position zu finden
export function Dropdown({
  open,
  content,
  close,
}: {
  open: boolean;
  content: React.ReactNode;
  close: () => void;
}) {
  //um dropdown wieder zu schließen wenn irgendwo außerhalb geklickt wird
  useEffect(() => {
    if (!open) return;
    const clickAwayListener = (e: MouseEvent) => {
      const { target } = e;
      const clickedDropdown = (target as HTMLDivElement).classList.contains(
        styles.dropdown_container
      );
      if (!clickedDropdown) close();
    };
    window.addEventListener("click", clickAwayListener);
    return () => {
      window.removeEventListener("click", clickAwayListener);
    };
  }, [open]);
  if (!open) return <></>;
  return <div className={styles.dropdown_container}>{content}</div>;
}
