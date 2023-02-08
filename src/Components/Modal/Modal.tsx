import styles from "./styles.modal.module.css";
export function Modal({
  isOpen,
  close,
  children,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <>
      {isOpen ? (
        <div
          className={styles.modal}
          onClick={(e) => {
            //weil createportal bubbling von events nicht verhindert
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
