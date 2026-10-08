import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const startEdit = () => {
    setDraft(todo.text);
    setEditing(true);
  };

  const finish = (save) => {
    const value = draft.trim();
    if (save && value) onEdit(todo.id, value);
    setEditing(false);
  };

  return (
    <li className={`item${todo.done ? " done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        aria-label="Bajarildi deb belgilash"
      />

      {editing ? (
        <input
          className="edit"
          autoFocus
          value={draft}
          maxLength={120}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => finish(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") finish(true);
            if (e.key === "Escape") finish(false);
          }}
        />
      ) : (
        <span onDoubleClick={startEdit}>{todo.text}</span>
      )}

      {!editing && (
        <button className="icon-btn" onClick={startEdit} aria-label="Tahrirlash">
          ✎
        </button>
      )}
      <button
        className="icon-btn del"
        onClick={() => onDelete(todo.id)}
        aria-label="O'chirish"
      >
        ×
      </button>
    </li>
  );
}
