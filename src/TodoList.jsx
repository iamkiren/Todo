import React from "react";
import List from "@mui/material/List";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";

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

  function toggleTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  const addTodo = (text) => {
    setTodo((prevTodos) => {
      return [...prevTodos, { text: text, id: 789, completed: false }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            remove={() => removeTodo(todo.id)}
            toggleTodo={toggleTodo}
          />
        );
      })}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
