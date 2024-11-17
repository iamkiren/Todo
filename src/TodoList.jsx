import React from "react";
import List from "@mui/material/List";
import TodoItems from "./TodoItems";

export default function TodoList() {
  const initialTodo = [
    { id: "1234", text: "Buy books", completed: false },
    { id: "1235", text: "Buy pen", completed: false },
    { id: "1236", text: "Buy files", completed: true },
    { id: "1237", text: "Buy pencils", completed: false },
  ];

  const [todos, setTodo] = React.useState(initialTodo);

  function removeTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            remove={() => removeTodo(todo.id)}
          />
        );
      })}
    </List>
  );
}
