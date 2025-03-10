import { use, useState } from "react";
import "./Todos.css";
import { migrate } from "../app/db/migrate";
import { todos } from "../app/db/schema";
import { addTodoAction, deleteTodoAction, fetchAllTodos } from "../app/db/actions";
import { client } from "../app/db/drizzle";

const setup = (async () => {
  await migrate();

  // TODO - refactor
  const seed = async () => {
    const csvResponse = await fetch('/smart_city_citizen_activity.csv');

    await client.query(`
      COPY citizens(id, age, gender, mode_of_transport, work_hours, shopping_hours, entertainment_hours, home_energy_consumption, charging_station_usage, carbon_footprint_kgco2, steps_walked, calories_burned, sleep_hours, social_media_hours, public_events_hours)
      FROM '/dev/blob'
      DELIMITER ','
      CSV HEADER;
      `, [], {
      blob: await csvResponse.blob()
    })
  }

  seed();

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
