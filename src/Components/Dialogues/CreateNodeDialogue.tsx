import { FormEventHandler, useState } from "react";
import styles from "./dialogues.styles.module.css";
export function CreateNodeDialogue({
  onSubmit,
  onCancel,
}: {
  onSubmit: ({ name }: { name: string }) => void;
  onCancel: () => void;
}) {
  const [error, setError] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nameValue = (e?.target as any)?.name?.value;
    if (
      !(nameValue && typeof nameValue === "string" && nameValue.length !== 0)
    ) {
      setError("Name is required");
      return;
    }
    onSubmit({ name: nameValue });
  };
  return (
    <div className={styles.container}>
      <h2>Create a node</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="node name"
            type="text"
            name="name"
            id="name"
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
