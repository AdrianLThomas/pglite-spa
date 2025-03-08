import {  use, useState } from "react";

import { migrate } from "../app/db/migrate";
import { todos } from "../app/db/schema";
import { addTodoAction, deleteTodoAction, fetchAllTodos } from "../app/db/actions";
import { Repl } from "@electric-sql/pglite-repl";
import { client } from "../app/db/drizzle";


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
      <form action={handleAddTodoAction}>
        <input type="text" name="content" required />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span style={{ marginRight: "10px" }}>{todo.content}</span>
            <form action={handleDeleteTodoAction} style={{ display: "inline" }}>
              <input type="hidden" value={todo.id} name="id" />
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
      <Repl pg={client}/>
    </>
  );
}
