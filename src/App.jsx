import { useEffect, useMemo, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage.js";
import ProgressRing from "./components/ProgressRing.jsx";
import AddForm from "./components/AddForm.jsx";
import Filters from "./components/Filters.jsx";
import TodoItem from "./components/TodoItem.jsx";

export default function App() {
  const [todos, setTodos] = useLocalStorage("mubi-todos", []);
  const [theme, setTheme] = useLocalStorage("mubi-theme", "");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }, [theme]);

  const toggleTheme = () => {
    const isDark = theme
      ? theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "light" : "dark");
  };

  const add = (text) =>
    setTodos((prev) => [{ id: Date.now(), text, done: false }, ...prev]);
  const toggle = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));
  const edit = (id, text) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  const clearDone = () => setTodos((prev) => prev.filter((t) => !t.done));

  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  const shown = useMemo(
    () =>
      todos.filter((t) =>
        filter === "all" ? true : filter === "done" ? t.done : !t.done
      ),
    [todos, filter]
  );

  const subtitle = !total
    ? "Birinchi vazifani qo'shing"
    : done === total
    ? "Barchasi bajarildi, juda yaxshi!"
    : `${done} / ${total} bajarildi`;

  return (
    <main>
      <header>
        <ProgressRing percent={percent} />
        <div className="titles">
          <h1>Bugungi vazifalar</h1>
          <p>{subtitle}</p>
        </div>
        <button className="theme" onClick={toggleTheme} aria-label="Mavzuni almashtirish">
          ◐
        </button>
      </header>

      <section className="card">
        <AddForm onAdd={add} />
        <Filters value={filter} onChange={setFilter} />

        <ul>
          {shown.length === 0 ? (
            <li className="empty">
              {total
                ? "Bu bo'limda vazifa yo'q"
                : "Hozircha vazifa yo'q. Yuqoridan yangisini qo'shing."}
            </li>
          ) : (
            shown.map((t) => (
              <TodoItem
                key={t.id}
                todo={t}
                onToggle={toggle}
                onDelete={remove}
                onEdit={edit}
              />
            ))
          )}
        </ul>

        <footer>
          <span>{total - done} ta vazifa qoldi</span>
          {done > 0 && (
            <button type="button" onClick={clearDone}>
              Bajarilganlarni tozalash
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}
