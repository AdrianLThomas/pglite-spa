import { use, useState } from "react";
import "./Todos.css";
import { migrate } from "../app/db/migrate";
import { todos } from "../app/db/schema";
import { addTodoAction, deleteTodoAction, fetchAllTodos } from "../app/db/actions";

const setup = (async () => {
  await migrate();

  return await fetchAllTodos();
})()

export default function Todos() {
  const [todoList, setTodoList] = useState<(typeof todos.$inferSelect)[]>(use(setup));

  const handleAddTodoAction = async (formData: FormData) => {
    const newTodo = await addTodoAction(formData);
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodoAction = async (formData: FormData) => {
    const deleted = await deleteTodoAction(formData);
    setTodoList(todoList.filter((x) => x.id !== deleted.id));
  };

  return (
    <>
      <h3>To do list:</h3>
      <form action={handleAddTodoAction} style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
        <input type="text" name="content" style={{ flex: 1 }} required />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "5px",
            }}
          >
            <span>{todo.content}</span>
            <form action={handleDeleteTodoAction}>
              <input type="hidden" value={todo.id} name="id" />
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
