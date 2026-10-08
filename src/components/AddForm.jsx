import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText("");
  };

  return (
    <form className="add" onSubmit={submit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yangi vazifa yozing..."
        maxLength={120}
        aria-label="Yangi vazifa"
      />
      <button type="submit" className="primary">
        Qo'shish
      </button>
    </form>
  );
}
