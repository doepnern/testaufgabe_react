import { FormEventHandler, useState } from "react";
import styles from "./dialogues.styles.module.css";

export function CreateLeafDialogue({
  onSubmit,
  onCancel,
}: {
  onSubmit: ({ name, value }: { name: string; value: string }) => void;
  onCancel: () => void;
}) {
  const [error, setError] = useState("");

  //uncontrolled weil deutlich schneller und
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nameValue = (e?.target as any)?.name?.value;
    if (
      !(nameValue && typeof nameValue === "string" && nameValue.length !== 0)
    ) {
      setError("Name is required");
      return;
    }
    const content = (e?.target as any)?.content?.value;
    if (!(content && typeof content === "string" && content.length !== 0)) {
      setError("Content is required");
      return;
    }
    onSubmit({ name: nameValue, value: content });
  };
  return (
    <div className={styles.container}>
      <h2>Create a node</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="leaf name"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="content">Content:</label>
          <input
            placeholder="leaf content"
            type="text"
            name="content"
            id="content"
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.button_row}>
          <input
            className={`${styles.button} ${styles.cancel_button}`}
            type="button"
            value="Cancel"
            onClick={onCancel}
          />
          <input
            className={`${styles.button} ${styles.submit_button}`}
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
}
